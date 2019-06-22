import React, { Component } from 'react';
import My_Slider from '../slider/slider';
import Statistics from '../statistics/statistics';
import "../../style/_variables.scss";

class Homepage extends Component {
    state = {}
    render() {
        return (
            <div>
                <Statistics />
                <My_Slider />
            </div>
        );
    }
}

export default Homepage;