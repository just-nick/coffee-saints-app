import * as React from 'react';
import {connect} from 'react-redux';
import {SaintStore} from '../saint.store';
import {Link} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        app: state.appReducer,
        saints: state.saintReducer
    }
};

@(connect(mapStateToProps) as any)
export class SaintChooserComponent extends React.Component<any, { app: any, saints: SaintStore }> {
    constructor(props) {
        super(props);
    }

    public render() {
        let saints = this.props.saints.saintsList.saints;
        let saintsLoading = this.props.saints.saintsList.loading;

        return (<form>
            <h1>Choose your Saint</h1>
            <Link to="/add">Add a saint</Link>
            {this.saintList(saints, saintsLoading)}
            <button type="submit">Who Buys?</button>
        </form>);
    }

    private saintList (saints, loading) {
        if (loading) {
            return (<div className="loading">Loading...</div>);
        }
        else {
            return (<ul>{saints.map(this.saintItem)}</ul>);
        }
    }

    private saintItem (saint, index) {
        return (
            <li key={index}>
                <input id={'saint' + index} type="checkbox"/>
                <label htmlFor={'saint' + index}>{saint.name}</label>
                <div className="thumb"><img src=""/></div>
            </li>
        );
    }
}