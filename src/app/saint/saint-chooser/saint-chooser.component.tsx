import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {Link} from "react-router-dom";
import {Saint} from "../saint";
import {SaintStore} from "../saint.store";
import {RouteComponentProps} from "react-router";
import {findDOMNode} from "react-dom";
import {BuyerActions} from "../../buyer/buyer.actions";
import {BuyerComponent} from "../../buyer/buyer.component";


class SaintChooserComponent extends React.Component<SaintChooserComponentProps, SaintChooserComponentState> {
    constructor(props: SaintChooserComponentProps) {
        super(props);
        this.state = {
            selectedSaints: []
        }
    }

    public whoBuys(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.dispatch(BuyerActions.find(this.state.selectedSaints))
            .then(() => this.props.history.push('/buy'));
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

        return (<form className="saint-chooser" onSubmit={(e) => (this.whoBuys(e))}>
            <h1>Choose your Saint</h1>
            <Link className="add action" to="/add">Add a saint</Link>
            {this.saintList(saints, saintsLoading)}
            <button type="submit">Who Buys?</button>
        </form>);
    }

    private saintList (saints: Saint[], loading: boolean) {
        if (loading) {
            return (<div className="loading">Loading...</div>);
        }
        else {
            return (<ul className="saint-list">{saints.map((saint, index) => {
                return this.saintItem(saint, index);
            })}</ul>);
        }
    }

    private saintItem (saint: Saint, index: number) {
        return (
            <li key={index}>
                <input name="saintSelect" ref="saintSelect" id={'saint' + saint.id} type="checkbox" value={saint.id} onChange={(e) => {this.toggleSaint(e)}}/>
                <label htmlFor={'saint' + saint.id}>
                    <div className="name">{saint.name}</div>
                    <div className="thumb"><img className="default" src="/assets/beansus.svg"/></div>
                </label>
            </li>
        );
    }
}

export default connect((state) => ({saints: state.saintReducer}))(SaintChooserComponent);

interface SaintChooserComponentProps extends DispatchProp<any>, RouteComponentProps<any> {
    saints: SaintStore
}

interface SaintChooserComponentState {
    selectedSaints: number[]
}