import * as React from 'react';
import * as Modal from 'react-modal';
import MapUIComponent from '../map-ui/map-ui.component';

export class FindCoffeeModalComponent extends React.Component<any, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (<Modal
            isOpen={true}
            contentLabel="Modal"
        >
            <h1>Modal Content</h1>
            <MapUIComponent/>
        </Modal>);
    }
}