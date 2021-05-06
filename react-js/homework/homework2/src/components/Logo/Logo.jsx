import React, { Component } from "react";
import './Logo.scss';

class Logo extends Component {
    render() {
        return (
            <a 
            href="https://www.amazon.com/Music-Albums/s?k=Music+Albums&i=popular&rh=n%3A5174%2Cn%3A37%2Cp_n_date%3A1249112011&dc&language=en_US&qid=1620061705&rnid=5174&ref=sr_nr_n_1"
            target='new'
            >
                <img className="Logo"
                    src="img/logo.png"
                    alt="Music"
                />                
            </a>
        )
    }
}

export default Logo;