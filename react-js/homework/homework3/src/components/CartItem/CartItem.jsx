import React from "react";
import PropTypes from 'prop-types';
import { Button } from "../Button/Button";
import '../Product/Product.scss'
import './CartItem.scss'

export const CartItem = ({ product, count, onRemoveWithCart }) => {

    return (
        <div>
            <hr className="hr"/>
            <div className="container-all width row justify-content-between">
                <img
                    className="cart-img"
                    src={product.url}
                    alt={product.albums}
                />
                <div className="column justify-content-center m-15 width-250">   
                    <p
                        className="Product__NameAlbums">
                        {product.albums}
                    </p>
                    <p
                        className="Product__Author">
                        by {product.author}
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
                </div>
                <div className="price-count-btn row align-items-center">
                    <div className="row align-items-center m-15">
                        <span className="Product__Price">
                            <span className="Product__Сurrency">
                            $
                            </span>
                            {product.price * count}
                        </span>
                    </div>
                    <div className="row align-items-center m-15">
                    Quantity: { count }
                    </div>
                    <div className="row align-items-center m-15">
                        <Button
                            className="btn"
                            text="Remove"
                            style={{ backgroundColor: "green" }}
                            onClick={onRemoveWithCart}
                        >&times;
                        </Button>
                    </div>
                </div>
            </div>
        </ div >
    )
}

CartItem.propTypes = {
    product: PropTypes.object,
    handelModalConfirm: PropTypes.func,
    count: PropTypes.number
}