import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {RouteComponentProps} from "react-router-dom";
import {CoffeeGroup} from './coffee-group';
import {CoffeeGroupActions} from './coffe-group.actions';

class CoffeeGroupComponent extends React.Component<CoffeeGroupComponentProps, CoffeeGroupComponentState> {
    constructor(props: CoffeeGroupComponentProps) {
        super(props);
        this.state = {
            name: '',
            description: '',
            coffeeGroupsList:[]
        }
    }

    private onSubmit(e: React.FormEvent<any>) {
        e.preventDefault();
        let newGroup: CoffeeGroup = {
            name: this.state.name,
            description: this.state.description
        }
        console.log(newGroup.name, newGroup.description);

        this.props.dispatch(CoffeeGroupActions.add(newGroup));
        this.props.history.push('/');

    }

    private onGroupChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({name: e.target.value});
    }

    private onGroupDescChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({description: e.target.value});
    }

    private onGroupsListClick(){
        this.props.dispatch(CoffeeGroupActions.get());
        this.props.history.push('groups-list');
    }

    public render() {
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
                <div className ='groups-list'>
                    <div><button onClick={this.onGroupsListClick}>Coffee Groups List</button></div>
                </div>
            </div>
        )
    }
}

export default connect(() => ({}))(CoffeeGroupComponent as any);

interface CoffeeGroupComponentState {
    name: string;
    description: string;
    coffeeGroupsList : CoffeeGroup[];
}

interface CoffeeGroupComponentProps extends DispatchProp<any>, RouteComponentProps<any> {
}