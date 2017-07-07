import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {BuyerStore} from './buyer.store';
import {BuyerActions} from "./buyer.actions";

export class BuyerComponent extends React.Component<BuyerComponentProps, BuyComponentState> {
    constructor(props: BuyerComponentProps) {
        super(props);
    }

    public componentDidMount() {
        console.log(this.props.buyer.discover);
        if(this.props.buyer.discover === false) {
            this.props.history.push('/');
        }
    }

    public render() {
        let buyer = this.props.buyer.buyer;
        let buyerLoading = this.props.buyer.loading;
        let onBuyClick = () => this.props
            .dispatch(BuyerActions.buy(this.props.buyer.buyer.id, this.props.buyer.consumerIds))
            .then(() => this.props.history.push('/'));

        if (buyerLoading) {
            return (<div className="loading">Loading...</div>);
        }
        else {
            return (
                <div>
                    <p>{buyer.name}</p>
                    <button onClick={onBuyClick} type="button">Buy</button>
                </div>
            )
        }
    }
}

export default connect((state) => {
    console.log('connect State is', state);
    return {buyer: state.buyerReducer}
})(BuyerComponent as any);

interface BuyerComponentProps extends DispatchProp<any>, RouteComponentProps<any> {
    buyer: BuyerStore
}

interface BuyComponentState {}
