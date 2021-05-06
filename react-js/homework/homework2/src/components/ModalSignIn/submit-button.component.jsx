import React from 'react';
import '../Button/Button.scss'

const SubmitButton = ({ children, ...otherProps }) => (
    <button className='btn' {...otherProps}>
        {children}
    </button>
)

export default SubmitButton;