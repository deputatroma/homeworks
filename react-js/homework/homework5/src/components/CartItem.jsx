import React from "react";
import PropTypes from 'prop-types';
import { Button } from "./Button";
import '../assets/Product.scss';
import '../assets/CartItem.scss';
import { useDispatch } from "react-redux";
import { showModalDelete } from "../store/cart";

export const CartItem = ({ product, count }) => {

    const dispatch = useDispatch()
    const onClick = () => dispatch(showModalDelete(product.id))

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
                        style={{ backgroundColor: "Brown" }}
                        onClick={onClick}
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
    count: PropTypes.number,
    showModalDelete: PropTypes.func,
}