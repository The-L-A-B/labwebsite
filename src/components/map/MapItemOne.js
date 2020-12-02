 import React from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import markerIcon from '../../assets/img/marker.png'

const MapItemOne = props => {
    const mapStyles = {

    };

    return (
        <Map
            google={props.google}
            zoom={10}
            style={mapStyles}
            initialCenter={{lat: props.latitude, lng: props.longitude}}
        >
            <Marker
                position={{
                    lat: props.latitude,
                    lng: props.longitude
                }}
                icon={{
                    url: markerIcon,
                }}
                animation={props.google.maps.Animation.BOUNCE}
            />
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC6iKLVzr34W23jAZDT3HlrElOHfK6IH_w')
})(MapItemOne);
