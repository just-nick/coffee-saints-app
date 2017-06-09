import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';

class BuyerComponent extends React.Component<BuyerComponentProps, {}> {
    constructor(props: BuyerComponentProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <button type="button">Buy</button>
            </div>
        )
    }
}
export default connect(() => {})(BuyerComponent);

interface BuyerComponentProps extends DispatchProp<any> {}