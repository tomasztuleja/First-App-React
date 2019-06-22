import React, { Component } from 'react';
import "./footer.scss";

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="essence">
                        <div className="customers_service">
                            Biuro obsługi klienta
                        <div className="info">
                                <i class="fas fa-phone-volume"></i>
                                12 000 00 00
                        </div>

                            <div className="info">
                                <i class="fas fa-at"></i>
                                asdf@asdf.com
                        </div>

                            <div className="info">
                                <i class="fas fa-map-marked-alt"></i>
                                ul. Programistów 1, 33 - 333 Kraków
                        </div>

                        </div>

                        <div className="write">

                            <div className="element">
                                <i class="fas fa-envelope"></i>
                            </div>

                            <div className="element">
                                Masz pytanie? Skontaktuj się!
                        </div>
                        </div>

                        <div className="icons">
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>

                    <div className="copyright">
                        Ⓒ 2019
                        created by us
                    </div>
                </div>

            </div>

        );
    }
}

export default Footer;