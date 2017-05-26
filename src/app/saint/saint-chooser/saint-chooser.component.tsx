import * as React from 'react';
import {connect} from 'react-redux';
import {AppActions} from '../../app.actions';
import {SaintStore} from '../saint.store';

const mapStateToProps = (state) => {
    return {
        app: state.appReducer,
        saints: state.saintReducer
    }
};

@connect(mapStateToProps)
export class SaintChooserComponent extends React.Component<any, { app: any, saints: SaintStore }> {
    constructor(props) {
        super(props);
    }

    public render() {
        let saints = this.props.saints.saintsList.saints;
        let saintsLoading = this.props.saints.saintsList.loading;

        let saintItem = (saint, index) => (
            <li key={index}>
                <input id={'saint' + index} type="checkbox"/>
                <label htmlFor={'saint' + index}>{saint.name}</label>
                <div className="thumb"><img src=""/></div>
            </li>
        );

        let list;
        if (!saintsLoading) {
            list = (<ul>{saints.map(saintItem)}</ul>);
        }
        else {
            list = (<div className="loading">Loading...</div>);
        }

        return (<form>
            <h1>Choose your Saint</h1>
            <button onClick={(e) => this.addSaint(e)}>Add a saint</button>
            {list}
            <button type="submit">Who Buys?</button>
        </form>);
    }

    public addSaint(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        this.props.dispatch(AppActions.setView('add'));
    }
}