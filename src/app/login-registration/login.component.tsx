import * as React from "react";
import {RouteComponentProps} from "react-router-dom";
import {InjectedFormProps, reduxForm} from 'redux-form';
import {connect} from "react-redux";

export class LoginComponent extends React.Component<InjectedFormProps,any> {
    constructor(props: InjectedFormProps) {
        super(props);
        this.state = {
        }
    }

    public componentDidMount() {
    }

    public render() {
        return (
        <form onSubmit={this.props.handleSubmit}>
            <div>
                <label>User</label>
                <input type={'text'}/>
            </div>

            <div>
                <label>Password</label>
                <input type={'password'}/>
            </div>

            <button type={'submit'}>Login</button>
        </form>
        )
    }

}

connect(() => {
    return {
    }
})(LoginComponent as any);

export default reduxForm({
    form: 'login'
})(LoginComponent);

