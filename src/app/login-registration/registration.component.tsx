import * as React from "react";
import {RouteComponentProps} from "react-router-dom";
import {connect, DispatchProp} from "react-redux";
import {UserActions} from './user.actions';

export class RegistrationComponent extends React.Component<DispatchProp<any> & RouteComponentProps<any>,any> {
    constructor(props:DispatchProp<any> & RouteComponentProps<any>) {
        super(props);
        this.state = {
            user:{
                username:'',
                password:''
            }
        }
    }

    public render() {
        const change = (e: any) => this.change(e);
        const formSubmit = (e: any) => this.handleSubmit(e);

        return (
        <form onSubmit={formSubmit} className={'registration-form'}>
            <div className="field">
                <label>User</label>
                <input type={'text'} name={'username'} value={this.state.user.username} onChange={change}/>
            </div>

            <div className="field">
                <label>Password</label>
                <input type={'password'} name={'password'} value={this.state.user.password} onChange={change}/>
            </div>

            <div className="field">
                <label>Re-Enter Password</label>
                <input type={'password'} name={'re-password'} onChange={change}/>
            </div>

            <button type={'submit'}>Create Account</button>
            <a href = '/'>Login</a>
        </form>
        )
    }

    private change(e:any){
        const newState = {...this.state};
        newState.user[e.target.name] = e.target.value;
        this.setState(newState);
    }

    private handleSubmit(e:any){
        e.preventDefault();
        console.log('formSubmit');
        this.props.dispatch(UserActions.register(this.state.user.username, this.state.user.password));
        this.props.history.push('/coffee')
    }

}

export default connect<{},{},RouteComponentProps<any>>((state) => {
    return{
        user: state.userReducer
    }
})(RegistrationComponent);



