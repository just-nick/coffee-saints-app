import * as React from "react";
import {SyntheticEvent} from "react";
import {RouteComponentProps} from "react-router-dom";
import {connect, DispatchProp} from "react-redux";
import {UserActions} from './user.actions';
import UserStore from './user.store';

class LoginComponent extends React.Component<UserProps & DispatchProp<any> & RouteComponentProps<any>, any> {
    constructor(props: UserProps & DispatchProp<any> & RouteComponentProps<any>) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: ''
            }
        }
    }
    public render() {
        const change = (e: any) => this.change(e);
        const formSubmit = (e: any) => this.handleSubmit(e);

        return (
            <form onSubmit={formSubmit} className={'login-form'}>
                <div className="field">
                    <label>User</label>
                    <input type={'text'} name={'username'} value={this.state.user.username} onChange={change}/>
                </div>

                <div className="field">
                    <label>Password</label>
                    <input type={'password'} name={'password'} value={this.state.user.password} onChange={change}/>
                </div>

                <button type={'submit'}>Login</button>
                <a href = '/register'>Register</a>
            </form>
        )
    }

    private change(e: any) {
        const newState = {...this.state};
        newState.user[e.target.name] = e.target.value;
        this.setState(newState);
    }

    private handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
                e.preventDefault();
        console.log('user password',this.state.user);
        this.props.dispatch(UserActions.login(this.state.user.username, this.state.user.password));
        this.props.history.push('/coffee')
    }


}

export default connect<UserProps, {}, RouteComponentProps<any>>((state) => ({
    user: state.userReducer
}))(LoginComponent);

interface UserProps {
    user: UserStore
}
