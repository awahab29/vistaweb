var LocationActions = require('../actions/LocationActions');
var $ = require('jquery');
var parseXml = require('xml2js').parseString;
import xmlToJson from './../utils/xmlToJson';

var mockData = [
  { id: 0, name: 'Abu Dhabi' },
  { id: 1, name: 'Berlin' },
  { id: 2, name: 'Bogota' },
  { id: 3, name: 'Malta' }
];

var LocationSource = {
  fetchLocations() {
    return {
      remote() {
        return new Promise(function (resolve, reject) {
          // simulate an asynchronous flow where data is fetched on
          // a remote server somewhere.
          setTimeout(function () {

            // change this to `false` to see the error action being handled.
            if (true) {
              // resolve with some mock data
              resolve(mockData);
            } else {
              reject('Things have broken');
            }
          }, 250);
        });
      },

      local() {
        console.log('local check');
        return null;
      },

      success: LocationActions.updateLocations,
      error: LocationActions.locationsFailed,
      loading: LocationActions.fetchLocations
    }
  },

  fetchJourneys() {

    return new Promise(function (resolve, reject) {

      $.get( "http://localhost:3000/api/getJourneys", function( data ) {
            var parsedJson = xmlToJson(data);
            var dataArray = parsedJson.journeys.journey;
            resolve( dataArray);
      });

    });

  }
};

module.exports = LocationSource;
