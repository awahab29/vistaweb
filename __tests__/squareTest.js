/**
 * Created by V_D on 1/18/2016.
 */

//jest.dontMock('../src/AltApp');
//unmocking of stores and actions configured in package.json

import alt from '../src/AltApp';

var FavoritesStore = require('../src/stores/FavoritesStore');

var LocationActions = require('../src/actions/LocationActions');

describe('TestStore', function() {

  it('listens to add favourite action', () => {
    // get initial state of store
    var oldLength = FavoritesStore.getState().locations.length;

    // create action to be dispatched
    var data = {id: 10, name: 'bhawalpur'},
        action = LocationActions.FAVORITE_LOCATION;

    alt.dispatcher.dispatch({action, data});

    //console.log(FavoritesStore.getState().locations);

    // assertions
    expect(FavoritesStore.getState().locations.length).toBe(oldLength + 1);

  });


});
