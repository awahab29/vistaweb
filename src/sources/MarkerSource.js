/**
 * Created by Muhammad Faizan on 12-Jan-16.
 */
import MarkerAction from '../actions/MarkerAction';

let markers = [
  {lat: 31.377852, lng: 7.226563, name:'A' }

  ,{lat: 25.2048, lng: 55.2708, name:'B' }
];

var MarkerSource  = {

	fetchMarkers() {

				return new Promise((resolve,reject) => {
				;
				var shouldFetch = true;
					if (shouldFetch) {

						resolve(markers)
					} else {
						reject("I am broken.");
					}
				});



}}

module.exports = MarkerSource;