import React, { Component } from 'react';
import Button from '../Button/Button';
import ModalBase from '../ModalBase/ModalBase';

class ModalConfirm extends Component {
    render() {
        return (
            <ModalBase
                header="Confirm"
                text="You are writing or editing a post."
                textConfirm="Leave this page?"
                closeButton={false}
                action={[
                    <Button text='No' backgroundColor="btn-confirm-modal" />,
                    <Button onClick={this.props.onClose} text='Yes' backgroundColor="btn-confirm-modal" />,
                ]}
                bgColorHeader="seaGreen"
                bgColorBody="mediumSeaGreen"
                bgColorFooter="mediumSeaGreen"
                onClose={this.props.onClose}
            />
        )
    }
}

export default ModalConfirm;