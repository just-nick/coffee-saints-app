import * as React from "react";
import {connect, DispatchProp} from "react-redux";
import {RouteComponentProps} from "react-router-dom";
import {BuyerStore} from "./buyer.store";
import {BuyerActions} from "./buyer.actions";
import {SaintStore} from '../saint/saint.store';
import {Saint} from '../saint/saint';

export class BuyerComponent extends React.Component<BuyerComponentProps, BuyComponentState> {
    constructor(props: BuyerComponentProps) {
        super(props);
        this.state = {
            selectedBuyer: -1
        }
    }

    public componentDidMount() {
        if (this.props.buyer.discover === false) {
            this.props.history.push('/');
        }
    }

    public selectSaint(event: React.ChangeEvent<HTMLInputElement>) {
        let selectedBuyer = +event.target.value;
        console.log(selectedBuyer);
        this.setState({
            ...this.state,
            selectedBuyer
        });
    }

    private alternateSaintList (saints: Saint[], loading: boolean) {
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
                <input name="saintSelect" ref="saintSelect" id={'saint' + saint.id} type="radio" value={saint.id} onChange={(e) => {this.selectSaint(e)}}/>
                <label htmlFor={'saint' + saint.id}>
                    <div className="name">{saint.name}</div>
                    <div className="thumb"><img className="default" src="/assets/beansus.svg"/></div>
                </label>
            </li>
        );
    }

    public render() {
        let buyer = this.props.buyer.buyer;
        let loading = this.props.buyer.loading;
        let saints = this.props.saint.saintsList.saints;
        let buyerLoading = this.props.buyer.loading;

        let onBuyClick = () => {
            this.props
                .dispatch(BuyerActions.buy(this.props.buyer.buyer.id, this.props.buyer.consumerIds))
                .then(() => {
                    this.props.history.push('/');
                });
        };

        let onAnotherBuyerClick = () => {
            this.props
                .dispatch(BuyerActions.buy(this.state.selectedBuyer, this.props.buyer.consumerIds))
                .then(() => {
                    this.props.history.push('/');
                });
        };

        if (buyerLoading) {
            return (<div className="loading">Loading...</div>);
        }
        else {
            return (
                <div>
                    <h1>It's {buyer.name} turn to buy!</h1>
                    <button onClick={onBuyClick} type="button">Confirm?</button>

                    <h2>Or, choose someone else</h2>
                    <ul>
                        {this.alternateSaintList(saints, loading)}
                    </ul>
                    <button onClick={onAnotherBuyerClick} type="button">Someone else pays</button>
                </div>
            )
        }
    }
}

export default connect((state) => {
    return {buyer: state.buyerReducer,
            saint: state.saintReducer}
})(BuyerComponent as any);

interface BuyerComponentProps extends DispatchProp<any>, RouteComponentProps<any> {
    buyer: BuyerStore,
    saint: SaintStore
}

interface BuyComponentState {
    selectedBuyer: number
}
