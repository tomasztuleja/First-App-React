import React, { Component } from 'react';
import "./header.scss";
import "../../style/index.scss";

class Header extends Component {
    state = {}
    render() {
        return (
            <div className="header">
                <div className="container">

                    <div className="log">
                        <i class="fas fa-user-plus"></i> załóż konto
                    </div>

                    <div className="log">
                        <i class="fas fa-sign-in-alt"></i> zaloguj
                    </div>

                    <div className="log">
                        <i class="fas fa-sign-out-alt"></i> wyloguj
                    </div>

                </div>
            </div >
        );
    }
}

export default Header;