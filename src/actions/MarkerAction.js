/**
 * Created by Muhammad Faizan on 12-Jan-16.
 */
var alt = require('../AltApp');
import MarkerSource from '../sources/MarkerSource'

class MarkerAction {

    updateMarker(markersPoint) {
        return markersPoint;
    }

    markerFetchSuccess(markerPoints) {
        return markerPoints
    }
    markerFetchFailed (failureMessage){
        return failureMessage;
    }

    fetchMarkers() {

        return (dispatch) => {
            dispatch();
            MarkerSource.fetchMarkers().then((markers)=> {

                this.markerFetchSuccess(markers);
            })
            .catch(err => {
                  this.markerFetchFailed(err);
              })
        }
    }
}

module.exports = alt.createActions(MarkerAction);
