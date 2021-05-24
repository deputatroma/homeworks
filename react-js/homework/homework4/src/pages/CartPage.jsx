import React from "react";
import PropTypes from 'prop-types';
import { CartList } from "../components/CartList";
import '../assets/CartPage.scss';

export const CartPage = () => {
    return (
        <div className="container">
            <CartList />
        </div>
    )
}

CartPage.propTypes = {
    product: PropTypes.object,
}