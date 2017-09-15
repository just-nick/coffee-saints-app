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
            selectedBuyer: -1,
            chooseSomeoneElse: false
        }
    }

    public componentDidMount() {
        if (this.props.buyer.discover === false) {
            this.props.history.push('/');
        }
    }

    public selectSaint(event: React.ChangeEvent<HTMLInputElement>) {
        let selectedBuyer = +event.target.value;
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

        if (buyerLoading) {
            return (<div className="loading">Loading...</div>);
        }
        else {
            return (
                <div>
                    {this.chosenBuyer(buyer.name)}
                    {this.chooseAnother(saints, loading)}
                </div>
            )
        }
    }

    public chosenBuyer(buyerName: string) {
        let show = !this.state.chooseSomeoneElse;

        let onBuyClick = () => {
            this.props
                .dispatch(BuyerActions.buy(this.props.buyer.buyer.id, this.props.buyer.consumerIds))
                .then(() => {
                    this.props.history.push('/');
                });
        };

        if(show) {
            return (
                <div>
                    <h1>It's {buyerName} turn to buy!</h1>
                    <button onClick={onBuyClick} type="button">Confirm?</button>
                    <br/>
                    <button onClick={() => {
                        this.setState({
                            ...this.state,
                            chooseSomeoneElse: true
                        });
                    }} type="button">Choose someone else
                    </button>
                </div>
            )
        }
        return null;
    }

    public chooseAnother(saints: Saint[], loading: boolean) {
        let show = this.state.chooseSomeoneElse;
        let onAnotherBuyerClick = () => {
            this.props
                .dispatch(BuyerActions.buy(this.state.selectedBuyer, this.props.buyer.consumerIds))
                .then(() => {
                    this.props.history.push('/');
                });
        };

        if(show) {
            return (
                <div>
                    <h1>Choose who will pay for the Coffees</h1>
                    <ul>
                        {this.alternateSaintList(saints, loading)}
                    </ul>
                    <button onClick={onAnotherBuyerClick} type="button">Someone else pays</button>
                </div>
            )
        }
        return null;
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
    selectedBuyer: number,
    chooseSomeoneElse: boolean
}
