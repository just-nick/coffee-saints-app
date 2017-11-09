import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {RouteComponentProps} from "react-router-dom";
import {CoffeeGroup} from './coffee-group';
import {CoffeeGroupActions} from './coffee-group.actions';
import {CoffeeGroupStore} from './coffee-group.store';
import {Link} from 'react-router-dom';
class CoffeeGroupComponent extends React.Component<CoffeeGroupComponentProps, CoffeeGroupComponentState> {
    constructor(props: CoffeeGroupComponentProps) {
        super(props);
        this.state = {
            name: '',
            description: '',
            // coffeeGroups: []
        };
        this.props.dispatch(CoffeeGroupActions.get());
    }

    private onSubmit(e: React.FormEvent<any>) {
        e.preventDefault();
        let newGroup: CoffeeGroup = {
            name: this.state.name,
            description: this.state.description
        };

        this.props.dispatch(CoffeeGroupActions.add(newGroup));
        this.props.history.push('/');

    }

    private onGroupChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({name: e.target.value});
    }

    private onGroupDescChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({description: e.target.value});
    }

    public render() {
        let coffeeGroups = this.props.coffeeGroups.coffeeGroupsList.coffeeGroups;
        let coffeeGroupsLoading =this.props.coffeeGroups.coffeeGroupsList.loading;
        return (
            <div>
                <div className="add-group">
                    <div>Add a group</div>
                    <form onSubmit={(e) => this.onSubmit(e)}>
                        <div>
                            <label>Group Name : </label>
                            <input id="groupName" autoFocus={true} value={this.state.name}
                                   onChange={(e) => this.onGroupChange(e)}/>
                        </div>
                        <div>
                            <label>Description : </label>
                            <input id="groupDescription" value={this.state.description}
                                   onChange={(e) => this.onGroupDescChange(e)}/>
                        </div>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <div className='groups-list'>
                    <div>
                        <label> Please select a group: </label>
                    </div>
                    {this.coffeeGroupList(coffeeGroups, coffeeGroupsLoading)}
                </div>
            </div>
        )
    }

    private coffeeGroupList (coffeeGroups: CoffeeGroup[], loading: boolean) {
        console.log("coffeegroups" , coffeeGroups);
        if (loading) {
            return (<div className="loading">Loading...</div>);
        }
        else {
            return (<ul className="coffee-group-list">{coffeeGroups.map((coffeeGroup, index) => {
                return CoffeeGroupComponent.coffeeGroupItem(coffeeGroup, index);
            })}</ul>);
        }
    }

    private static coffeeGroupItem(coffeeGroup: CoffeeGroup, index: number) {
        return (
            <li key={index}>
                {/*<input name="coffeeGroupSelect" ref="coffeeGroupSelect" id={'coffeeGroup' + coffeeGroup.id} type="checkbox" value={coffeeGroup.id}/>*/}
                <label htmlFor={'coffeeGroup' + coffeeGroup.id}>
                    <li key={index}>
                        <Link to={"/groups/" + coffeeGroup.id}>
                            {coffeeGroup.name} - {coffeeGroup.description}
                        </Link>
                    </li>
                </label>
            </li>
        );
    }
}


export default connect(
    (stateProvider) => {
            return {
                coffeeGroups: stateProvider.coffeeGroupReducer
            }
        }
)(CoffeeGroupComponent);


interface CoffeeGroupComponentProps extends DispatchProp<any>, RouteComponentProps<any> {
    coffeeGroups: CoffeeGroupStore;
}

interface CoffeeGroupComponentState {
    name: string;
    description: string;
    // coffeeGroups: CoffeeGroup[];
}
