import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Product.scss';
import { Button } from '../Button/Button';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { toggleFavorite, isFavorite } from "../utils/favorite";
import { star, star_fill } from '../utils/ico';

export const Product = ({ product, onAddToCart, favoriteListCallback }) => {

  const [colorSvg, setColorSvg] = useState(() => isFavorite(product.id) ? star_fill : star);

  const handleFavorite = (productId) => {
    toggleFavorite(productId);
    isFavorite(productId) ? setColorSvg(star_fill) : setColorSvg(star);

    if (typeof favoriteListCallback == 'function') {
      favoriteListCallback()
    }
  }

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
          onClick={() => handleFavorite(product.id)}
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
          onClick={onAddToCart}
          className="btn"
          text="Add to cart"
          style={{ backgroundColor: "green" }}
        />
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object,
  onAddToCart: PropTypes.func,
  favoriteListCallback: PropTypes.func
}