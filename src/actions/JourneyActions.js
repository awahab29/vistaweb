var alt = require('../AltApp');
var LocationSource = require('../sources/LocationSource');

class JourneyActions {

  fetchJourneys() {

    return (dispatch) => {
      // we dispatch an event here so we can have "loading" state.
      dispatch();
      LocationSource.fetchJourneys()
        .then((items) => {
          // we can access other actions within our action through `this.actions`
          this.afterFetchJourneys(items);
        });
    }
  }

  afterFetchJourneys(items) {
    return items;
  }

}

module.exports = alt.createActions(JourneyActions);