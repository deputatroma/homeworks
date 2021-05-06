import React, { Component } from 'react';
import ModalBaseSignIn from './ModalBaseSignIn';

class ModalSignIn extends Component {
    render() {
        return (
            <ModalBaseSignIn
                header="Sign in"
                closeButton={true}
                bgColorHeader="seaGreen"
                bgColorBody="mediumSeaGreen"
                bgColorFooter="mediumSeaGreen"
                onClose={this.props.onClose}
            />
        )
    }
}

export default ModalSignIn;