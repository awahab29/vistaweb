/**
 * Created by V_D on 1/11/2016.
 */

import React from 'react';
import AltContainer from 'alt-container';
import JourneyActions from '../actions/JourneyActions';
import Journeys from '../components/Journeys';
import JourneyStore from '../stores/JourneyStore';

var JourneysListing = React.createClass({

  componentDidMount() {
    JourneyActions.fetchJourneys();
  },

  render() {
    return (
        <div>
          <h3>Journeys Listing from XML to JSON</h3>

          <AltContainer store={JourneyStore}>
            <Journeys />
          </AltContainer>

        </div>
    );
  }
});

module.exports = JourneysListing;
