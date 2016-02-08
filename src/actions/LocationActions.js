var alt = require('../AltApp');


const LocationActions = alt.generateActions('updateLocations', 'fetchLocations', 'locationsFailed', 'favoriteLocation', 'removeFavoriteLocation');

module.exports = LocationActions;
