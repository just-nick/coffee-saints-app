import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {BuyerStore} from './buyer.store';

export class BuyerComponent extends React.Component<BuyerComponentProps, BuyComponentState> {
    constructor(props: BuyerComponentProps) {
        super(props);

        // console.log('this component construct ', this.props.buyers);
    }

    //
    // public componentWillMount(){
    //     console.log('this component will mount ', this.props.buyers);
    // }
    //
    // public componentDidMount(){
    //     console.log('this component did mount ', this.props.buyers);
    // }
    //
    // public componentDidUpdate() {
    //     let buyer = this.props.buyers.buyer;
    //     this.setState({buyer: buyer.state});
    //     console.log('this component did update ', this.props.buyers);
    //
    // }

    public render() {
        let buyer = this.props.buyer.buyer;

        let buyerLoading = buyer.loading;
        console.log('this props buyer buyer loading is ', buyerLoading);
        console.log('buy from me', JSON.stringify(buyer));

        if (buyerLoading) {
            return (<div className="loading">Loading...</div>);
        }
        else {
            console.log(buyer.saint.name);
            return (
                <div>
                    <p>{buyer.saint.name}</p>
                    <button type="button">Buy</button>
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

interface BuyComponentState {
}
