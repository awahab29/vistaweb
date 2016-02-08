/**
 * Created by Muhammad Faizan on 12-Jan-16.
 */
import MarkerAction from '../actions/MarkerAction';

let markers = [
	{lat: 31.377852, lng: 7.226563 },
	{lat: 0.477852, lng: 0.226563 },
	{lat: 0.377852, lng: 0.326563 },
	{lat: 0.277852, lng: 0.426563 },
	{lat: 0.177852, lng: 0.526563 }
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