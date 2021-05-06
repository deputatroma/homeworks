import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Product.scss';
import Button from '../Button/Button';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { addToFavorite, isFavorite } from "../utilities/favorite";
import { star, star_fill } from '../utilities/ico';

class Product extends Component {

  constructor(props) {
    super(props)
    this.state = {
      colorSVG: isFavorite(props.product.id) ? star_fill : star
    }
  }

  handleFavorite = (productId) => {
    addToFavorite(productId);
    isFavorite(productId) ? this.setState({ colorSVG: star_fill }) : this.setState({ colorSVG: star })
  }

  render() {
    const { albums, author, url, price, discount, id, type, } = this.props.product;
    const { onAddToCart } = this.props;
    return (
      <div
        className="Product"
      >
        <div
          className="row justify-cont-between"
        >
          <img
            className="Product__Img"
            src={url}
            alt={albums}
          />

          <FavoriteButton
            onClick={() => this.handleFavorite(id)}
            d={this.state.colorSVG}
          />

        </div>
        <p
          className="Product__NameAlbums">
          {albums}
        </p>
        <p
          className="Product__Author">
          by {author}
        </p>
        <p>
          <span className="Product__Type">
          Audio media type:
          </span>
          {type}
        </p>
        <p
          className="Product__id">
          Code: {id}
        </p>
        <div className="row justify-cont-between align-items-center margin-top">
          <span className="Product__Price">
            <span className="Product__Сurrency">
              $
            </span>
            {price}
              &nbsp;
            <span className="Product__Discount">
              {discount}
            </span>
          </span>

          <Button
            onClick={onAddToCart}
            className="btn"
            text="Add to cart"
            style={{ backgroundColor: "green" }}
          />
          
        </div>
      </div>
    )
  }
}

export default Product;

Product.propTypes = {
  product: PropTypes.object,
  onAddToCart: PropTypes.func,
}