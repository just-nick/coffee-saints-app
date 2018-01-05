import {Link} from 'react-router-dom';
import * as React from 'react';
import {connect} from 'react-redux';

class MenuComponent extends React.Component<any, any> {
    public render() {
        return (
            <nav>
                {this.groupRender()}
                <Link to='/where'>Where to buy?</Link>
            </nav>
        )
    }

    private groupRender() {
        if (!this.props.userReducer.currentCoffeeGroupId) {
            return (
                <div>
                    <Link to='/'>Select Group</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Group {this.currentGroup()}</p>
                    <div className='group-actions'>
                        <Link to='/'>Who's buying?</Link>
                        <Link to='/'>Add Saint</Link>
                        <Link to='/'>Change group</Link>
                    </div>
                </div>
            )
        }
    }

    private currentGroup() {
        this.props.userReducer.currentCoffeeGroupId
    }
}

export default connect((state) => ({
    userReducer: state.userReducer
}))(MenuComponent)