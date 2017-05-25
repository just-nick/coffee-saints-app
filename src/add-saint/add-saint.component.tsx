import * as React from 'react';
import {connect} from 'react-redux';
import {SaintActions} from '../saint/saint.actions';
import {Saint} from '../saint/saint';
import {AppActions} from '../app/app.actions';

const mapStateToProps = (state) => {
    return {
        saints: state.saintReducer,
        app: state.appReducer
    }
};

@connect(mapStateToProps)
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
        this.props.dispatch(AppActions.loading(true));
        this.props.dispatch(SaintActions.addSaint(newSaint)).then(() => {
            this.props.dispatch(AppActions.setView(''));
            this.props.dispatch(AppActions.loading(false));
        }, () => {
            this.props.dispatch(AppActions.loading(false));
        });
    }

    private onSaintChange(event) {
        this.setState({name: event.target.value});
    }

    public render() {
        let saints = this.props.saints;

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