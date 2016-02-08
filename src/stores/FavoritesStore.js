var alt = require('../AltApp');
var LocationActions = require('../actions/LocationActions');
var {findAndRemove} = require('../utils/Helpers');

class FavoritesStore {
  constructor() {
    this.locations = [];

    this.bindListeners({
      addFavoriteLocation: LocationActions.FAVORITE_LOCATION,
      onRemoveFavoriteLocation: LocationActions.removeFavoriteLocation
    });
  }


  addFavoriteLocation(location) {
    this.locations.push(location);
  }

  onRemoveFavoriteLocation(location) {
    this.locations = findAndRemove(this.locations,'id',location.id);
  }
}

module.exports = alt.createStore(FavoritesStore, 'FavoritesStore');
