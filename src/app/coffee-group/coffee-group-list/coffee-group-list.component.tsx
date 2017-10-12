import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {RouteComponentProps} from "react-router";
import {CoffeeGroupStore} from "../coffee-group.store";
import {CoffeeGroupActions} from "../coffee-group.actions";
import {CoffeeGroup} from "../coffee-group";
import {Link} from 'react-router-dom';

class CoffeeGroupListComponent extends React.Component<CoffeeGroupListComponentProps, CoffeeGroupListComponentState> {
    constructor(props: CoffeeGroupListComponentProps) {
        super(props);
        this.state = {};

        this.props.dispatch(CoffeeGroupActions.find());
    }

    public render() {
        let coffeeGroups = this.props.coffeeGroups.coffeeGroupsList.coffeeGroups;
        let coffeeGroupsLoading = this.props.coffeeGroups.coffeeGroupsList.loading;

        return (<div>
            <h1>Choose your group</h1>
            {this.generateCoffeeGroupList(coffeeGroups, coffeeGroupsLoading)}
        </div>);
    }

    private generateCoffeeGroupList(coffeeGroups: CoffeeGroup[], loading: boolean) {
        if (loading) {
            return (<div className="loading">Loading...</div>);
        }
        else {
            return (<ul className="coffee-group-list">{coffeeGroups.map((coffeeGroup, index) => {
                return this.generateCoffeeGroupItem(coffeeGroup, index);
            })}</ul>);
        }
    }

    private generateCoffeeGroupItem(coffeeGroup: CoffeeGroup, index: number) {
        return (
            <li key={index}>
                <Link to={"/groups/" + coffeeGroup.id}>
                    {coffeeGroup.name}
                </Link>
            </li>
        );
    }
}

export default connect((state) => ({coffeeGroups: state.coffeeGroupReducer}))(CoffeeGroupListComponent);

interface CoffeeGroupListComponentProps extends DispatchProp<any>, RouteComponentProps<any> {
    coffeeGroups: CoffeeGroupStore
}

interface CoffeeGroupListComponentState {

}