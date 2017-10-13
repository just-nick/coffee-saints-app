import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {RouteComponentProps} from "react-router-dom";
import {CoffeeGroup} from './coffee-group';
import {CoffeeGroupActions} from './coffe-group.actions';
import {CoffeeGroupStore} from './coffee-group.store';

interface CoffeeGroupsListComponentProps extends DispatchProp<any>, RouteComponentProps<any>{
    coffeeGroups : CoffeeGroupStore;
}

interface CoffeeGroupsListComponentState {

}

class CoffeeGroupsListComponent extends React.Component<CoffeeGroupsListComponentProps,CoffeeGroupsListComponentState>{
    constructor(props:CoffeeGroupsListComponentProps){
        super(props);
        this.state={
            coffeeGroups:[]
        };
        this.props.dispatch(CoffeeGroupActions.get());
    }

    private coffeeGroupsList(coffeeGroups: CoffeeGroup[], loading: boolean) {
        if (loading) {
            return (<div className="loading">Loading...</div>);
        }
        else {
            return (<ul className="coffee-groups-list">
                <li>
                    <div>Group Name</div>
                    <div>Description</div>
                </li>
                {coffeeGroups.map((coffeeGroup, index) => {
                    return this.coffeeGroupItem(coffeeGroup, index);
                })}
                </ul>);
        }
    }

    private coffeeGroupItem (coffeeGroup: CoffeeGroup, index: number) {
        return (
            <li key={index}>
                <label htmlFor={'coffeeGroup' + coffeeGroup.id}>
                    <div className="name">
                        {coffeeGroup.name}
                    </div>
                    <div className="description">
                        {coffeeGroup.description}
                    </div>
                    <div className="thumb"><img className="default" src="/assets/beansus.svg"/></div>
                </label>
            </li>
        );
    }

    public render() {
        return (
            <div>
                <div className ='groups-list'>
                    <div>Coffee Groups List</div>
                    <div>
                        {this.coffeeGroupsList(this.props.coffeeGroups.coffeeGroupsList.coffeeGroups,false)}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(() => ({}))(CoffeeGroupsListComponent as any);


