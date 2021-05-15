import React from 'react';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import './Header.scss';

export const Header = () => {

    return (
        <header className="headerStyled">
            <Logo />
            <div>
                <h2 className="headerStyled__Heading">Music Albums</h2>
            </div>
            <div className="row align-items-center">
                <Button
                    className="btn btn-sign-in"
                    style={{ backgroundColor: "OrangeRed" }}
                    text="Sign in" />
            </div>
        </header>
    )
}