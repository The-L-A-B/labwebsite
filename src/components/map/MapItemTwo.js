import React, {Component} from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import markerIcon from "../../assets/img/marker-2.png";
import gmapMarkerBg from "../../assets/img/gmap-overlay-bg.png";

class MapItemTwo extends Component {

    state = {
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow: false
    };

    onMarkerClick = (props, marker) => {
        this.setState({
            activeMarker: marker,
            selectedPlace: props,
            showingInfoWindow: true
        });
    }

    onInfoWindowClose = () => {
        this.setState({
            activeMarker: null,
            showingInfoWindow: false
        });
    }

    onMapClicked = () => {
        if (this.state.showingInfoWindow)
            this.setState({
                activeMarker: null,
                showingInfoWindow: false
            });
    };

    render() {
        return (
            <Map
                className="map"
                google={this.props.google}
                onClick={this.onMapClicked}
                style={{height: '100%', position: 'relative', width: '100%'}}
                zoom={12}>

                <Marker
                    name="601 Lexinton Avenue, NY"
                    phone="+44 20 7794 0190"
                    email="info@example.com"
                    onClick={this.onMarkerClick}
                    position={{lat: 37.778519, lng: -122.40564}}
                    icon={{url: markerIcon}}
                    animation={this.props.google.maps.Animation.BOUNCE}
                />

                <Marker
                    name="601 Lexinton Avenue, USA"
                    phone="+44 20 7794 0190"
                    email="info@example.com"
                    onClick={this.onMarkerClick}
                    position={{lat: 37.7532508, lng: -122.460038}}
                    icon={{url: markerIcon}}
                    animation={this.props.google.maps.Animation.BOUNCE}
                />

                <Marker
                    name="601 Lexinton Avenue, USA"
                    phone="+44 20 7794 0190"
                    email="info@example.com"
                    onClick={this.onMarkerClick}
                    position={{lat: 37.7125689, lng: -122.2219315}}
                    icon={{url: markerIcon}}
                    animation={this.props.google.maps.Animation.BOUNCE}
                />

                <Marker
                    name="601 Lexinton Avenue, NY"
                    phone="+44 20 7794 0190"
                    email="info@example.com"
                    onClick={this.onMarkerClick}
                    position={{lat: 37.759703, lng: -122.428093}}
                    icon={{url: markerIcon}}
                    animation={this.props.google.maps.Animation.BOUNCE}
                />

                <InfoWindow
                    name="601 Lexinton Avenue, NY"
                    marker={this.state.activeMarker}
                    onClose={this.onInfoWindowClose}
                    visible={this.state.showingInfoWindow}>
                    <div className={'map-tooltip'}>
                        <img src={gmapMarkerBg} alt="GMAP"/>
                        <h5 className="mt-3">{this.state.selectedPlace.name}</h5>
                        <h6 className='mb-0'>{this.state.selectedPlace.phone}</h6>
                        <h6>{this.state.selectedPlace.email}</h6>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC6iKLVzr34W23jAZDT3HlrElOHfK6IH_w')
})(MapItemTwo);
