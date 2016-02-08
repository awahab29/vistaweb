/**
 * Created by Muhammad Faizan on 01-Feb-16.
 */

/* TODO: ADD Base Store for map, make sure store is such that it can handle multiple legs, have support for longitude and latitude*/

import alt from '../AltApp';
import BAFActions from '../actions/BookAFlightActions'

/**
 * Malta [35.937496, 14.375416]
 * London [51.470022, -0.454295]
 * NY [40.712784, -74.005941]
 */
/** Class representing a Store of legs map values. */
class BookAFlightMapStore{
	constructor() {

		/**
		 * @type {Array}
		 */
		this.markers = [];

		/**
		 * @type {Map}
		 */
		this.leg = new Map() ;

		/**
		 * @type {number[]}
		 */
		this.center =[35.8833, 14.5000]; 		//35.8833° N, 14.5000° E // Centering at Malta

		/**
		 * @type {number}
		 */
		this.zoom= 2;

		this.bindActions(BAFActions);
	}

	/**
	 * @method
	 * This functions insserts a Leg to display it on map
	 * @param {Object} newLeg - Leg's Coordinates.
	 * @param {Array} newLeg.to - latitude and longitude in [lat, lng] form
	 * @param {Array} newLeg.from - latitude and longitude [lat, lng] form
	 */
	onNewLeg(newLeg) {
		this.leg.set( this.leg.size, newLeg)
	}

	/**
	 * This functions insserts a Leg to display it on map
	 * @param {Number} key - Legs Coordinates, key, so that it can be identified which leg you're referring to.
	 * @return {Object} - Leg Coordinates
	 * @return {Array} return.to - latitude and longitude in [lat, lng] form
	 * @return {Array} return.from - latitude and longitude [lat, lng] form
	 */
	onGetLeg(key) {
		return this.leg.get(key) || null;
	}

	/**
	 *
	 * @returns {Array}
	 */
	onGetAllLeg() {
		let res = [];
		for (let [ key, val ] of this.leg.entries())
		{
			res.push({
				key,
				position
			})
		}
		return res;
	}
	

}


module.exports = alt.createStore(BookAFlightMapStore, 'BookAFlightMapStore');
