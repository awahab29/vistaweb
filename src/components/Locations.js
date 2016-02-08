

var React = require('react');
var AltContainer = require('alt-container');
import LocationStore from '../stores/LocationStore';
import FavoritesStore from '../stores/FavoritesStore';
import Favorites from './FavouriteLocation.js';
import AllLocations from './AllLocation.js';
import Map from './Map/Map.js'



var Locations = React.createClass({
  componentDidMount() {
    LocationStore.fetchLocations();
  },

  render() {
    return (

        <div>
          <h3>Locations</h3>
          <AltContainer store={LocationStore}>
            <AllLocations />
          </AltContainer>

          <h3>Favorites</h3>
          <AltContainer store={FavoritesStore}>
            <Favorites />
          </AltContainer>
        </div>
    );
  }
});

module.exports = Locations;
