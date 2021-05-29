import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import { CartPage } from "./CartPage";
import { FavoritePage } from './FavoritePage';
import { HomePage } from './HomePage';
import { Header } from "../components/Header";
import '../assets/MainPage.scss'

export function MainPage() {

    return (
        <Router>
            <div>
                <Header />
                    <div className="Menu">
                        <NavLink className="MenuItems" to="/">
                            <button className="btn-icon">
                                <svg viewBox="0 0 16 16" aria-hidden="true" role="presentation">
                                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                    <path d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                </svg>
                            </button>
                            HOME
                        </NavLink>
                        <NavLink className="MenuItems" to="/favorite">
                            <button className="btn-icon">
                                <svg viewBox="0 0 20 16" aria-hidden="true" role="presentation">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                            </button>
                            FAVORITE
                        </NavLink>
                        <NavLink className="MenuItems" to="/cart">
                            <button className="btn-icon">
                                <svg viewBox="0 0 16 16" aria-hidden="true" role="presentation">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                </svg>
                            </button>
                            CART
                        </NavLink>
                    </div>
                <Switch>
                    <Route exact path="/" >
                        <HomePage />
                    </Route>
                    <Route path="/favorite">
                        <FavoritePage />
                    </Route>
                    <Route path="/cart">
                        <CartPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}