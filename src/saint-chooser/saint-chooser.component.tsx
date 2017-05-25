import * as React from "react";
import {connect} from "react-redux";
import {AppActions} from '../app/app.actions';

const mapStateToProps = (state) => {
    return {
        app: state.appReducer,
        saints: state.saintReducer
    }
};

@connect(mapStateToProps)
export class SaintChooserComponent extends React.Component<any, any> {
    constructor(props) {
        super(props);
        console.log(props);
    }

    public render() {
        let saints = this.props.saints;

        return (<form>
            <h1>Choose your Saint</h1>
            <button onClick={(e) => this.addSaint(e)}>Add a saint</button>
            <ul>
                {saints.map((saint, index) =>
                    <li key={index}>
                        <input id={'saint' + index} type="checkbox"/>
                        <label htmlFor={'saint' + index}>{saint.name}</label>
                        <div className="thumb"><img src="" /></div>
                    </li>
                )}
            </ul>
            <button type="submit">Who Buys?</button>
        </form>);
    }

    public addSaint(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        this.props.dispatch(AppActions.setView('add'));
    }
}