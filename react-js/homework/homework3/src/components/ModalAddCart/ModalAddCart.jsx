import React from 'react';
import PropTypes from 'prop-types';
import { ModalBase } from '../ModalBase/ModalBase';

export const ModalAddCart = ({ onClose, onConfirm }) => {

  return (
    <ModalBase
      header="Adding to cart!"
      text="Selected  product will be added to cart."
      textConfirm="Add to cart?"
      closeButton={true}
      bgColorHeader="seaGreen"
      bgColorBody="mediumSeaGreen"
      bgColorFooter="mediumSeaGreen"
      bgInfo="forestGreen"
      onClose={onClose}
      onConfirm={onConfirm}
    />
  )
}
 
ModalAddCart.propTypes = {
  onClose: PropTypes.func,
  onConfirm: PropTypes.func
}