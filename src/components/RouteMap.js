/**
 * Created by VD on 1/12/2016.
 */
import {default as React, Component} from "react";

import {GoogleMapLoader,GoogleMap, DirectionsRenderer,DrawingManager} from "react-google-maps";

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class Directions extends Component {

    state = {
        origin: new google.maps.LatLng(25.0108815, 66.783798),
        destination: new google.maps.LatLng(25.3753515, 68.2196733),
        directions: null,
    };

    componentDidMount () {
        const DirectionsService = new google.maps.DirectionsService();

        DirectionsService.route({
            origin: this.state.origin,
            destination: this.state.destination,
            travelMode: google.maps.TravelMode.FLIGHT
        }, (result, status) => {
            if(status == google.maps.DirectionsStatus.OK) {
                this.setState({
                    directions: result
                })
            }
            else {
                console.error(`error fetching directions ${ result }`);
            }
        });
    }

    render () {
        const {origin, directions} = this.state;

        return (
            <GoogleMapLoader
                containerElement={
        <div
          {...this.props}
          style={{
         height: "500px",
         }}
        />
         }
            googleMapElement={
            <GoogleMap
                       defaultZoom={7}
                       defaultCenter={origin}>
                {directions ? <DirectionsRenderer directions={directions} /> : null}
                <DrawingManager
          defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}
          defaultOptions={{
            drawingControl: true,
            drawingControlOptions: {
              position: google.maps.ControlPosition.TOP_CENTER,
              drawingModes: [
                google.maps.drawing.OverlayType.CIRCLE,
                google.maps.drawing.OverlayType.POLYGON,
                google.maps.drawing.OverlayType.POLYLINE,
                google.maps.drawing.OverlayType.RECTANGLE,
              ],
            },
            circleOptions: {
              fillColor: '#ffff00',
              fillOpacity: 1,
              strokeWeight: 5,
              clickable: false,
              editable: true,
              zIndex: 1,
            },
          }}
        />
            </GoogleMap>
            }
                />

        );
    }
}