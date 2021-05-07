import React, { Component } from 'react'
import ModalBase from '../ModalBase/ModalBase';

class ModalAddCart extends Component {
  render() {
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
        onClose={this.props.onClose}
        onConfirm={this.props.onConfirm} 
      />
    )
  }
}

export default ModalAddCart;