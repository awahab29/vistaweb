/**
 * Created by Muhammad Faizan on 08-Jan-16.
 */
import React from 'react';
import LocationStore from '../stores/LocationStore';
import LocationActions from '../actions/LocationActions';
import ComponentBase from './ComponentBase';

class FavouriteLocation extends ComponentBase {
  removeFave(ev){
  var location = LocationStore.getLocation(
      Number(ev.target.getAttribute('data-id'))
  );
  LocationActions.removeFavoriteLocation(location);
}
  render() {
    return (<div>
            <ul>
                {this.props.locations.map((location, i) => {
                    return (
                        <li key={i} className="chip" > {location.name}
                          <button  onClick={this.removeFave} data-id={location.id}>
                            x
                          </button>
                        </li>

                    );
                })}
            </ul>
            {this.props.children}
        </div>
    );
  }
}

FavouriteLocation.propTypes = {};
FavouriteLocation.defaultProps = {};

export default FavouriteLocation;

