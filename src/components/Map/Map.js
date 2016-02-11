/**
 * Created by Muhammad Faizan on 11-Jan-16.
 */
import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';
import MyGreatPlace from './MapPlace';
import MarkerStore from '../../stores/MarkerStore'
import MarkerAction from '../../actions/MarkerAction'

export default class SimpleMapPage extends React.Component {
	static propTypes = {
		center: React.PropTypes.array,
		zoom: React.PropTypes.number,
		greatPlaceCoords: React.PropTypes.any
	};
	/*static defaultProps = {
		center: [40.714, -74.006],
		zoom: 2,
		greatPlaceCoords: [],
	};*/

	componentDidMount() {

    /*MarkerAction.fetchMarkers()
    this.props.greatPlaceCoords = MarkerStore.getState();
*/
	}

	shouldComponentUpdate = shouldPureComponentUpdate;

	constructor(props) {
      var geodesicPoly;
		super(props);
	}
  update() {
    //var {markers} = this.props;

    console.log(this.props.markers[0].lat);
    var path = [new google.maps.LatLng(this.props.markers[0].lat,this.props.markers[0].lng),
      new google.maps.LatLng(this.props.markers[1].lat,this.props.markers[1].lng)];
    //poly.setPath(path);
    this.geodesicPoly.setPath(path);
    //var heading = google.maps.geometry.spherical.computeHeading(path[0], path[1]);
  }

	/*<MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /!* Kreyser Avrora *!/ />
	 <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /!* road circle *!/ />*/
	render() {
		var marker1, marker2;



		return (
			<div className="map">
				<GoogleMap
          YesIWantToUseGoogleMapApiInternals={true}
					onGoogleApiLoaded={({map, maps}) => {
                  this.geodesicPoly = new maps.Polyline({
                  strokeColor: '#CC0099',
                  strokeOpacity: 1.0,
                  strokeWeight: 3,
                  geodesic: true,
                  map: map
                 });


                this.update();

                /*map.controls[google.maps.ControlPosition.TOP_CENTER].push(
                    document.getElementById('info'));*/
/*
                marker1 = new google.maps.Marker({
                  map: map,
                  draggable: false,
                  position: {lat: 40.714, lng: -74.006}
                });

                marker2 = new google.maps.Marker({
                  map: map,
                  draggable: false,
                  position: {lat: 48.857, lng: 2.352}
                });

                /!*var bounds = new google.maps.LatLngBounds(
                    marker1.getPosition(), marker2.getPosition());
                map.fitBounds(bounds);*!/
                /!*google.maps.event.addListener(marker1, 'position_changed', update);
                google.maps.event.addListener(marker2, 'position_changed', update);*!/


                console.log(poly);
                geodesicPoly = new maps.Polyline({
                  strokeColor: '#CC0099',
                  strokeOpacity: 1.0,
                  strokeWeight: 3,
                  geodesic: true,
                  map: map
                });
                console.log(geodesicPoly);

                update();*/




              /*var marker2 = new google.maps.Marker({
                map: map,
                draggable: false,
                position: {lat: 48.857, lng: 2.352}
              });*/
/*
              var self = this;
              var marks = [];
              let geocoder = new maps.Geocoder();
              var places =[];

              geocoder.geocode( { 'address': this.props.greatPlace[0]}, function(results, status) {
                  if (status == google.maps.GeocoderStatus.OK) {
                    new google.maps.Marker({
                      map: map,
                      position: {
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng()
                       },
                       key: results[0].place_id
                     })
                   }
                    else {
                      alert("Geocode was not successful for the following reason: " + status);
                    }
                  });
*/
            }}

					bootstrapURLKeys={
                    {key: 'AIzaSyClrg6TsqAGm4zfUTBcZGXMxdG2Sg3LnfM'}
                }// set if you need stats etc ...
					center={this.props.center}
					zoom={this.props.zoom}>
          {
            this.props.markers.map((marker, index) => {
              return (
                <MyGreatPlace key={index} lat={marker.lat} lng={marker.lng} text={marker.name} />
                )

            })

          }

				</GoogleMap>
			</div>
		);
	}
}