import React, { Component } from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import './Header.scss'
import ModalSignIn from '../ModalSignIn/ModalSignIn';
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenModalSignIn: false,
        }
    }

    toggleModalSignIn = () => {
        this.setState({ isOpenModalSignIn: !this.state.isOpenModalSignIn })
    }

    render() {   
        return (
            <header className="headerStyled">
                <Logo />
                <div>
                    <h2 className="headerStyled__Heading">Music Albums</h2>
                </div>
                <Button
                    className="btn" 
                    onClick={this.toggleModalSignIn}
                    style={{ backgroundColor: "OrangeRed " }} 
                    text="Sign in" 
                />
                {
                    this.state.isOpenModalSignIn &&
                    <ModalSignIn
                        onClose={this.toggleModalSignIn}
                    />
                }
            </header>
        )
    }
}

export default Header;