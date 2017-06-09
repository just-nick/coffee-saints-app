import * as React from 'react';
import {connect} from 'react-redux';
import {SaintActions} from '../saint.actions';
import {Saint} from '../saint';
import {BrowserRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        saints: state.saintReducer,
        app: state.appReducer
    }
};

@(connect(mapStateToProps) as any)
export class AddSaintComponent extends React.Component<any, any> {
    constructor(props) {
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

    private onSaintChange(event) {
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