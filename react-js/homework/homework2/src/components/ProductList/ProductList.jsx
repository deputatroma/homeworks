import React, { Component } from "react";
import Product from "../Product/Product";
import ModalAddCart from "../ModalAddCart/ModalAddCart";
import './ProductList.scss'
import addToCart from "../utilities/cart.js";


class ProductList extends Component {


  constructor(props) {
    super(props)

    this.state = {
      products: [],
      modalProductId: null,
    }
  }

  async componentDidMount() {
    const response = await fetch('cardProduct.json');
    const result = await response.json();
    this.setState({ products: result });
  }

  handleModalClose = () => this.setState({ modalProductId: null })

  handleModalConfirm = () => {
    addToCart(this.state.modalProductId);
    this.handleModalClose();
  }


  render() {
    return (
      <div className="ProductList">
        {this.state.products.map((product) => {
          return <Product
            key={product.id}
            product={product}
            onAddToCart={() => this.setState({ modalProductId: product.id })}
          />;
        }
        )}

        {this.state.modalProductId &&
          <ModalAddCart
            onConfirm={this.handleModalConfirm}
            onClose={this.handleModalClose}
          />
        }
      </div>
    );
  }
}

export default ProductList;
