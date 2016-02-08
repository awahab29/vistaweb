/**
 * Created by Muhammad Faizan on 21-Jan-16.
 */


import React from 'react';
import AltContainer from 'alt-container';
import MarkerStore from '../stores/MarkerStore';
import MarkerAction from '../actions/MarkerAction';
import Map from './Map/Map'

module.exports = React.createClass({

	componentDidMount() {
		MarkerAction.fetchMarkers();
	},

	render() {
		return (
			<AltContainer store={MarkerStore}>
				<Map/>
			</AltContainer>
		)
	}
})