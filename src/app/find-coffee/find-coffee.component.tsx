import * as React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

class FindCoffeeComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const findCoffee = () => this.findCoffee();
        return (
            <div>
                <button className='find-coffee-action' onClick={findCoffee}>
                    <i className="material-icons">location_searching</i>
                </button>
            </div>
        );
    }

    private findCoffee() {
        this.props.history.push('/find-coffee');
    }
}

export default withRouter(FindCoffeeComponent);