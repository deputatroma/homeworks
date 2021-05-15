import React from 'react';
import PropTypes from 'prop-types';
import { ModalBase } from '../ModalBase/ModalBase';

export const ModalDeleteCart = ({ onClose, onConfirm }) => {
    return (
        <ModalBase
            header="Deleting from cart!"
            text="This product will be removed from your cart."
            textConfirm="Are you sure want to remove the product from your cart?"
            closeButton={true}
            bgColorHeader="indianRed"
            bgColorBody="salmon"
            bgColorFooter="salmon"
            bgInfo="crimson"
            onClose={onClose}
            onConfirm={onConfirm}
        />
    )
}

ModalDeleteCart.propTypes = {
    onClose: PropTypes.func,
    onConfirm: PropTypes.func
}