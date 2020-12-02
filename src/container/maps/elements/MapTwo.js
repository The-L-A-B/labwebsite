 import React from 'react';
import MapItemTwo from "../../../components/map/MapItemTwo";

const MapTwo = props => {
    return (
        <div className="google-map-area ptb--100 ptb-md--80 ptb-sm--80 bg_color--1 section text-center">
            <div className="brook-section-title mb--40">
                <h3 className="heading heading-h3">Show Info with Marker</h3>
            </div>

            <div className="position-relative" style={{height: '500px'}}>
                <MapItemTwo latitude="47.444" longitude="-122.176"/>
            </div>
        </div>
    );
};

export default MapTwo;
