import React from 'react';
import MapItemOne from "../../../components/map/MapItemOne";

const MapOne = props => {
    return (
        <div className="google-map-area pt--100 pt-md--80 pt-sm--80 bg_color--1 section text-center">
            <div className="brook-section-title mb--40">
                <h3 className="heading heading-h3">Default Style</h3>
            </div>

            <div className="position-relative" style={{height: '500px'}}>
                <MapItemOne latitude="47.444" longitude="-122.176"/>
            </div>
        </div>
    );
};

export default MapOne;
