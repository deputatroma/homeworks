import React, { Component } from 'react';
import './WrapperButton.scss';
import Button from '../Button/Button';
import ModalConfirm from '../ModalConfirm/ModalConfirm';
import ModalDelete from '../ModalDelete/ModalDelete';

class WrapperButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenModalDelete: false,
            isOpenModalConfirm: false,
        }
    }

    toggleModalDelete = () => {
        this.setState({ isOpenModalDelete: !this.state.isOpenModalDelete })
    }

    toggleModalConfirm = () => {
        this.setState({ isOpenModalConfirm: !this.state.isOpenModalConfirm })
    }

    render() {
        return (
            <div className="wrapper-button">
                <Button
                    onClick={this.toggleModalDelete}
                    className={this.props.className}
                    text="Open first modal"
                    backgroundColor='btn-delete'
                />
                <Button
                    onClick={this.toggleModalConfirm}
                    className={this.props.className}
                    text="Open second modal"
                    backgroundColor="btn-confirm"
                />
                {
                    this.state.isOpenModalDelete &&
                    <ModalDelete
                        onClose={this.toggleModalDelete}
                    />
                }
                {
                    this.state.isOpenModalConfirm &&
                    <ModalConfirm
                        onClose={this.toggleModalConfirm}
                    />
                }
            </div>
        )
    }
}

export default WrapperButton;