import * as React from 'react';
import MapUIComponent from '../map-ui/map-ui.component';

export class FindCoffeeModalComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            open: true
        }
    }

    render() {
        const toggle = () => this.toggle();
        return (<div>
            <h1>Find your coffee...</h1>
            <div className='modal-wrapper'>
                <MapUIComponent/>
            </div>

            <button onClick={toggle}>close</button>
        </div>);
    }

    private toggle() {
        this.setState({
            open: !this.state.open
        });
        console.log(this.props.history);
        this.props.history.goBack();
    }
}