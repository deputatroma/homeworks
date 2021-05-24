import React from 'react';
import PropTypes from 'prop-types';
import '../assets/Product.scss';
import { Button } from './Button';
import { FavoriteButton } from './FavoriteButton';
import { star, star_fill } from '../utils/ico';
import { isFavorite } from '../utils/favorite';
import { connect } from "react-redux";
import { showModalAddToCart } from '../store/modalAdd';
import { selectFavorite, toggleFavorite } from '../store/favorite';


const mapStateToProps = (state) => ({
  favoriteProducts: selectFavorite(state)
});
 
export const Product = connect(mapStateToProps, { showModalAddToCart, toggleFavorite })(({ product, showModalAddToCart, toggleFavorite }) => {
  const colorSvg = isFavorite(product.id) ? star_fill : star

  return (
    <div
      className="Product"
    >
      <div
        className="row justify-cont-between"
      >
        <img
          className="Product__Img"
          src={product.url} 
          alt={product.albums}
        />

        <FavoriteButton
          onClick={() => toggleFavorite(product)}
          d={colorSvg}
        />

      </div>
      <p
        className="Product__NameAlbums">
        {product.albums}
      </p>
      <p
        className="Product__Author">
        {product.author}
      </p>
      <p>
        <span className="Product__Type">
          Audio media type:
        </span>
        {product.type}
      </p>
      <p
        className="Product__id">
        Code: {product.id}
      </p>

      <div className="row justify-content-between align-items-center margin-top">
        <span className="Product__Price">
          <span className="Product__Сurrency">
            $
          </span>
          {product.price}
        </span>
        <span className="Product__Discount">
            {product.discount}
        </span>

        <Button
          onClick={() => showModalAddToCart(product)}
          className="btn"
          text="Add to cart"
          style={{ backgroundColor: "green" }}
        />
      </div>
    </div>
  )
})

Product.propTypes = {
  product: PropTypes.object,
  showModalAddToCart: PropTypes.func,
  favoriteProducts: PropTypes.func,
  toggleFavorite: PropTypes.func
}