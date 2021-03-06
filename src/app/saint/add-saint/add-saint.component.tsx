import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {SaintActions} from '../saint.actions';
import {Saint} from '../saint';
import {RouteComponentProps} from "react-router-dom";

class AddSaintComponent extends React.Component<AddSaintComponentProps, AddSaintComponentState> {
    constructor(props: AddSaintComponentProps) {
        super(props);
        this.state = {
            name: ''
        }
    }

    private onSubmit(e: React.FormEvent<any>) {
        e.preventDefault();
        let newSaint: Saint = {
            name: this.state.name,
            coffee: 0
        };

        this.props.dispatch(SaintActions.add(newSaint));
        this.props.history.push('/');
    }

    private onSaintChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({name: event.target.value});
    }

    public render() {
        return (
            <div>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <input autoFocus={true} value={this.state.name} onChange={(e) => this.onSaintChange(e)}/>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}
export default connect(() => {})(AddSaintComponent as any);

interface AddSaintComponentState {
    name: string;
}

interface AddSaintComponentProps extends DispatchProp<any>, RouteComponentProps<any> {}