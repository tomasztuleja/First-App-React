import React, { Component } from 'react';
import "./navbar.scss";

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="navbar">
                <div className="container">
                    <div className="menu">
                        <li> <i class="fas fa-align-justify"></i> home</li>
                        <li> <i class="fas fa-dumbbell"></i> oferta</li>
                        <li> <i class="far fa-calendar-alt"></i> grafik </li>
                        <li> <i class="fas fa-portrait"></i> trenerzy</li>
                        <li> <i class="fas fa-camera-retro"></i>galeria</li>
                        <li> <i class="fas fa-map-marked-alt"></i> dojazd</li>
                        <li> <i class="fas fa-envelope-open-text"></i> kontakt </li>

                    </div>


                </div>

            </div>
        );
    }
}

export default Navbar;