/**
 * Created by Muhammad Faizan on 08-Jan-16.
 */
import React from 'react';
import LocationStore from '../stores/LocationStore';
import FavoritesStore from '../stores/FavoritesStore';
import LocationActions from '../actions/LocationActions';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

const AllLocations = React.createClass({
    addFave(ev) {
        var location = LocationStore.getLocation(
            Number(ev.target.getAttribute('data-id'))
        );
        LocationActions.favoriteLocation(location);
    },
    render() {
        if (this.props.errorMessage) {
            return (
                <div>{this.props.errorMessage}</div>
            );
        }

        if (LocationStore.isLoading()) {
            return (
                <div>
                    <img src="ajax-loader.gif" />
                </div>
            )
        }
        /*<button onClick={this.addFave} data-id={location.id}>
         +
         </button>*/
        return (
            <List subheader="Locations">
                {this.props.locations.map((location, i) => {
                    var faveButton = (
                        <button  onClick={this.addFave} data-id={location.id}>
                            +
                        </button>
                    );
                    var heart = (<img src={require('../images/heart.png')} />);

                    return (
                        <ListItem key={i} >
                            {location.name} {location.has_favorite ? heart : faveButton}
                        </ListItem>
                    );
                })}
            </List>
        );
    }
});


export default AllLocations;