/**
 * Created by V_D on 1/12/2016.
 */

var alt = require('../AltApp');
var JourneyActions = require('../actions/JourneyActions');

class JourneyStore {
  constructor() {
    this.journeys =[];

    this.bindActions(JourneyActions);

  }

  onAfterFetchJourneys(list) {
    this.journeys = list;

  }
}

module.exports = alt.createStore(JourneyStore, 'JourneyStore');

