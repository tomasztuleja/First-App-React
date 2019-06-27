import React, { Component } from 'react';
import Slider from "react-slick";
import "./slider.scss";
import photo_1 from "./photos/1.jpg";
import photo_2 from "./photos/2.jpg";
import photo_3 from "./photos/3.jpg";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };
        return (
            <div>

                <Slider {...settings}>
                    <div>
                        <img src={photo_1} />
                    </div>
                    <div>
                        <img src={photo_2} />
                    </div>
                    <div>
                        <img src={photo_3} />
                    </div>

                </Slider>
            </div>
        );
    }
}