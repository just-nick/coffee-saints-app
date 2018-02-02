import * as React from 'react';
import {FindCoffeeModalComponent} from './find-coffee-modal.component';

export class FindCoffeeComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showCoffeeModal: false
        }
    }

    render() {
        const openCoffeeFinder = (e:any) => this.openCoffeeFinder(e);

        if (this.state.showCoffeeModal) {
            debugger;
            return (<FindCoffeeModalComponent/>);
        }
        return (<button className='find-coffee-action' onClick={openCoffeeFinder}><i className="material-icons">location_searching</i>
        </button>);

    }

    private openCoffeeFinder(e: any) {
        e.stopPropagation();
        e.preventDefault();
        this.setState({
            showCoffeeModal: true
        });
    }
}