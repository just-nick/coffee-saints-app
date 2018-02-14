import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {Link} from "react-router-dom";
import {Saint} from "../saint";
import {SaintStore} from "../saint.store";
import {RouteComponentProps} from "react-router";
import {BuyerActions} from "../../buyer/buyer.actions";
import {SaintActions} from '../saint.actions';

class SaintChooserComponent extends React.Component<SaintChooserComponentProps, SaintChooserComponentState> {
    constructor(props: SaintChooserComponentProps) {
        super(props);
        this.state = {
            selectedSaints: []
        };

        this.props.dispatch(SaintActions.find(this.props.match.params.coffeeGroupId));
    }

    public whoBuys(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let whoBuysPath = '/groups/' + this.props.match.params.coffeeGroupId + '/who-buys';

        this.props.dispatch(BuyerActions.find(
            this.props.match.params.coffeeGroupId, this.state.selectedSaints)
        )
            .then(() => this.props.history.push(whoBuysPath));
    }

    public toggleSaint(event: React.ChangeEvent<HTMLInputElement>) {
        // This is seriously outrageous...
        let selectedSaints = this.state.selectedSaints;
        let value = +event.target.value;
        let existingIndex = selectedSaints.indexOf(value);

        if (event.target.checked && existingIndex === -1) {
            selectedSaints.push(value);
        }
        else if (!event.target.checked && existingIndex > -1) {
            selectedSaints.splice(existingIndex, 1);
        }
        this.setState({
            ...this.state,
            selectedSaints
        });
    }

    public render() {
        let saints = this.props.saints.saintsList.saints;
        let saintsLoading = this.props.saints.saintsList.loading;
        let addSaintPath = '/groups/' + this.props.match.params.coffeeGroupId + '/add-saint';

        return (<form className="saint-chooser" onSubmit={(e) => (this.whoBuys(e))}>
            <h1>
                Who is getting a coffee today?
            </h1>
            <Link className="add action" to={addSaintPath}>
                Add a saint
            </Link>

            {this.saintList(saints, saintsLoading)}

            <button type="submit" disabled={this.selectedSaintsCount() < 2}>
                Find out who buys
            </button>
        </form>);
    }

    private saintList(saints: Saint[], loading: boolean) {
        if (loading) {
            return (<div className="loading">Loading...</div>);
        }
        else {
            return (<ul className="saint-list">{saints.map((saint, index) => {
                return this.saintItem(saint, index);
            })}</ul>);
        }
    }

    private saintItem(saint: Saint, index: number) {
        return (
            <li key={index}>
                <input name="saintSelect" ref="saintSelect" id={'saint' + saint.id} type="checkbox" value={saint.id}
                       onChange={(e) => {
                           this.toggleSaint(e)
                       }}/>
                <label htmlFor={'saint' + saint.id}>
                    <div className="name">
                        {saint.name}
                        <div className="bought">
                            <span>Bought:</span>
                            {saint.coffeeBought}
                        </div>
                        <div className="consumed">
                            <span>Consumed:</span>
                            {saint.coffeeConsumed}
                        </div>
                    </div>
                    <div className="thumb"><img className="default" src="/assets/beansus.svg"/></div>
                </label>
            </li>
        );
    }

    private selectedSaintsCount() {
        return this.state.selectedSaints.length;
    }
}

export default connect((state) => ({saints: state.saintReducer}))(SaintChooserComponent);

interface SaintChooserComponentProps extends DispatchProp<any>, RouteComponentProps<any> {
    saints: SaintStore
}

interface SaintChooserComponentState {
    selectedSaints: number[]
}