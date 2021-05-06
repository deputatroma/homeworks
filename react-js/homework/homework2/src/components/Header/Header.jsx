import React, { Component } from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import './Header.scss'

class Header extends Component {
    render() {   
        return (
            <header className="headerStyled">
                <Logo />
                <div>
                    <h2 className="headerStyled__Heading">Music Albums</h2>
                </div>
                <Button
                    className="btn" 
                    style={{ backgroundColor: "OrangeRed " }} 
                    text="Sign in" 
                />
            </header>
        )
    }
}

export default Header;