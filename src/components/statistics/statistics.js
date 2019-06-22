import React, { Component } from 'react';
import "./statistics.scss"

class Statistics extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                {/* all items */}
                <div className="statistic-items">

                    {/* first statistic-item */}
                    <div className="statistic-item">
                        <div className="icon">
                            <i class="far fa-laugh-beam"></i>
                        </div>
                        <div className="count">
                            1587
                        </div>
                        <div className="item">
                            zadowolonych klientów
                         </div>
                    </div>

                    {/* second statistic item */}
                    <div className="statistic-item">
                        <div className="icon">
                            <i class="fas fa-heartbeat"></i>
                        </div>
                        <div className="count">
                            <i class="fas fa-infinity"></i>
                        </div>
                        <div className="item">
                            spalonych kalorii
                         </div>
                    </div>

                    {/* third statistic item */}
                    <div className="statistic-item">
                        <div className="icon">
                            <i class="fas fa-dumbbell"></i>
                        </div>
                        <div className="count">
                            5214486
                        </div>
                        <div className="item">
                            przeprowadzonych treningów
                         </div>
                    </div>

                    {/* fourth statistics item */}
                    <div className="statistic-item">
                        <div className="icon">
                            <i class="fas fa-glass-whiskey"></i>
                        </div>
                        <div className="count">
                            101010
                        </div>
                        <div className="item">
                            litrów wypitej wody
                         </div>
                    </div>


                </div>
            </div>

        );
    }
}

export default Statistics;