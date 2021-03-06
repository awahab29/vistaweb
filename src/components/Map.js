/**
 * Created by VD on 1/8/2016.
 */
import {default as React, Component} from "react";
import {default as update} from "react-addons-update";

import {default as canUseDOM} from "can-use-dom";
import {default as _} from "lodash";

import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
import {triggerEvent} from "react-google-maps/lib/utils";

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
 class Mapping extends Component {

    state = {
        markers: [{
            position: {
                lat: -34.397, lng: 150.644,
            },
            key: "London",
            defaultAnimation: 5
        }]
    };

    constructor (props, context) {
        super(props, context);
        this.handleWindowResize = _.throttle(this.handleWindowResize, 500);
    }

    componentDidMount () {
        if (!canUseDOM) {
            return;
        }
        window.addEventListener("resize", this.handleWindowResize);
    }

    componentWillUnmount () {
        if (!canUseDOM) {
            return;
        }
        window.removeEventListener("resize", this.handleWindowResize);
    }

    handleWindowResize () {
        console.log("handleWindowResize", this._googleMapComponent);
        triggerEvent(this._googleMapComponent, "resize");
    }

    /*
     * This is called when you click on the map.
     * Go and try click now.
     */
    handleMapClick (event) {
        var {markers} = this.state;
        markers = update(markers, {
            $push: [
                {
                    position: event.latLng,
                    defaultAnimation: 2,
                    key: Date.now()// Add a key property for: http://fb.me/react-warning-keys
                },
            ],
        });
        this.setState({ markers });

        if (3 === markers.length) {
            this.props.toast(
                "Right click on the marker to remove it",
                "Also check the code!"
            );
        }
    }

    handleMarkerRightclick (index, event) {
        /*
         * All you modify is data, and the view is driven by data.
         * This is so called data-driven-development. (And yes, it's now in
         * web front end and even with google maps API.)
         */
        var {markers} = this.state;
        markers = update(markers, {
            $splice: [
                [index, 1]
            ],
        });
        this.setState({ markers });
    }

    render () {
        return (
            <GoogleMapLoader
                containerElement={
          <div
            {...this.props}
            style={{
              height: "500px"
            }}
          />
        }
                googleMapElement={
          <GoogleMap
            ref={(map) => (this._googleMapComponent = map) && console.log(map.getZoom())}
            defaultZoom={7}
            defaultCenter={{lat: 51.5072, lng: 0.1275}}
            onClick={this.handleMapClick}>
            {this.state.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  onRightclick={this.handleMarkerRightclick.bind(this, index)} />
              );
            })}
          </GoogleMap>
        }
                />
        );
    }
}
export default Mapping;