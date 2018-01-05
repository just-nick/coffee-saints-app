import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {Link, RouteComponentProps} from 'react-router-dom';
import {CoffeeGroup} from './coffee-group';
import {CoffeeGroupActions} from './coffee-group.actions';
import {CoffeeGroupStore} from './coffee-group.store';
import MapUIComponent from '../map-ui/map-ui.component';

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
        let coffeeGroupsLoading = this.props.coffeeGroups.coffeeGroupsList.loading;
        return (
            <div>
                <MapUIComponent/>
                <div className="add-group">
                    <div>
                        <h2>Add a group</h2>
                    </div>
                    <form onSubmit={(e) => this.onSubmit(e)}>
                        <div className="field">
                            <label>Group Name</label>
                            <input id="groupName" autoFocus={true} value={this.state.name}
                                   onChange={(e) => this.onGroupChange(e)}/>
                        </div>
                        <div className="field">
                            <label>Description </label>
                            <input id="groupDescription" value={this.state.description}
                                   onChange={(e) => this.onGroupDescChange(e)}/>
                        </div>

                        <button type="submit" disabled={this.state.name === ''}>Add</button>
                    </form>
                </div>
                <div className='groups-list'>
                    <div>
                        <h2> Please select a group: </h2>
                    </div>
                    {this.coffeeGroupList(coffeeGroups, coffeeGroupsLoading)}
                </div>
            </div>
        )
    }

    private coffeeGroupList(coffeeGroups: CoffeeGroup[], loading: boolean) {
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
                        <Link to={'/groups/' + coffeeGroup.id}>
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
