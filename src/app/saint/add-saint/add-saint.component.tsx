import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {UserActions} from '../../user/user.actions';
import {Saint} from '../saint';
import {SaintActions} from '../saint.actions';

class AddSaintComponent extends React.Component<AddSaintComponentProps, AddSaintComponentState> {
    constructor(props: AddSaintComponentProps) {
        super(props);
        this.state = {
            name: ''
        }

        this.props.dispatch(UserActions.selectGroup(this.props.match.params.coffeeGroupId));
    }

    private onSubmit(e: React.FormEvent<any>) {
        e.preventDefault();
        let newSaint: Saint = {
            name: this.state.name,
            coffeeBought: 0,
            coffeeConsumed: 0
        };

        this.props.dispatch(SaintActions.add(this.props.match.params.coffeeGroupId, newSaint));
        this.props.history.push('/groups/' + this.props.match.params.coffeeGroupId);
    }

    private onSaintChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({name: event.target.value});
    }

    public render() {
        return (
            <div className="add-saint">
                <h1>Add a saint</h1>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="field">
                        <label htmlFor="saintName">Name</label>
                        <input id="saintName" autoFocus={true} value={this.state.name}
                               onChange={(e) => this.onSaintChange(e)}/>
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default connect(() => ({}))(AddSaintComponent as any);

interface AddSaintComponentState {
    name: string;
}

interface AddSaintComponentProps extends DispatchProp<any>, RouteComponentProps<any> {
}