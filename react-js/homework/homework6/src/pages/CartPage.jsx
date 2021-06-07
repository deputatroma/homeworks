import React from "react";
import PropTypes from 'prop-types';
import { CartList } from "../components/CartList";
import '../assets/CartPage.scss';
import { FormOrderRedux } from "../components/FormOrder";
import { connect } from "react-redux";
import { getCartList, removeAllCartProducts, selectCart } from "../store/cart";

const mapStateToProps = (state) => ({
    cartProducts: selectCart(state),
})
 
export const CartPage = connect(mapStateToProps, { getCartList, removeAllCartProducts })(({ cartProducts, getCartList, removeAllCartProducts }) => {

    const onSubmit = (formData) => {
        const userOrder = { ...formData };
        userOrder.products = cartProducts;
        console.log(userOrder);
        removeAllCartProducts();
        getCartList();
    }

    return (
        <div className="container">
            <CartList />
            <hr className="hr"/>
            <br />
            <h4 className="heading-page delivery">Delivery address</h4>
            <FormOrderRedux onSubmit={onSubmit} />
        </div>
    )
})

CartPage.propTypes = {
    getCartList: PropTypes.func,
    cartProducts: PropTypes.object,
    removeAllCartProducts: PropTypes.func
}