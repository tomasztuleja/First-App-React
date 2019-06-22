import React, { Component } from 'react';
import Slider from "react-slick";
import "./slider.scss";

class My_Slider extends Component {
    state = {}
    render() {
        let slidersettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
        };
        return (
            <div className="homepage">
                <div className="homepage-slider">

                    <Slider {...slidersettings}>

                        {/* first photo */}
                        <div className="item" style={{ backgroundImage: `url(https://www.bslnutrition.com/wp-content/uploads/2017/07/bigstock-Training-Together-And-Staying-133016918.jpg)` }}>
                        </div>

                        {/* second photo */}
                        <div className="item" style={{ backgroundImage: `url(https://previews.123rf.com/images/dolgachov/dolgachov1609/dolgachov160906487/62579892-fitness-sport-dance-and-lifestyle-concept-group-of-smiling-people-with-coach-dancing-zumba-in-gym-or.jpg)` }}>
                        </div>

                        {/* third photo */}
                        <div className="item" style={{ backgroundImage: `url(https://www.mayfairclubs.com/wp-content/uploads/2015/05/groupfitness-1600x400.jpg)` }}>
                        </div>

                    </Slider>
                </div>
            </div >
        );
    }
}

export default My_Slider;