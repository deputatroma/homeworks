import React from 'react';
import { Button } from './Button';
import { Logo } from './Logo';
import '../assets/Header.scss'

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
                    style={{ backgroundColor: "Salmon" }}
                    text="Sign in" />
            </div>
        </header>
    )
}