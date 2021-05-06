import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Button.scss'


class Button extends Component {
    render() {
        const { className, onClick, style, text } = this.props;

        return (
            <button
                className={className}
                onClick={onClick}
                style={style}>
                {text}
            </ button >
        )
    }
}

export default Button;

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
    text: PropTypes.string,
}