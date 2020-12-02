import React from 'react';
import MapItem from "../../../components/map/MapItemOne";

const MapOne = () => {
    return (
        <div className="google-map-area">
            <div className="position-relative" style={{height: '570px'}}>
                <MapItem latitude="23.7634958" longitude="90.4289784"/>
            </div>
        </div>
    );
};

export default MapOne;
