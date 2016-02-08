/**
 * Created by Muhammad Faizan on 01-Feb-16.
 */

/* TODO: ADD Base Store for form, also check what is needed, make sure store is such that it can handle multiple legs*/

import alt from '../AltApp'
import BookAFlightActions from '../actions/BookAFlightActions'

class BookAFLightFormStore {
  constructor() {
    this.locations = ['london','New York','Malta'];
    this.pickTime = new date();
    this.totalPassengers = 8;
    this.passengers = ['sid','john','william'];
    this.paymentOptions = ['FSP Account', 'VJ2.0','Primary VISA','Add Payment'];
    this.aircrafts = ['Global 5000', 'Global 6000', 'Challenger 850', 'Challenger 605'];

    this.bindListeners({
      addPassenger: BookAFlightActions.ADD_PASSENGER,
      requestFlight: BookAFlightActions.REQUEST_FLIGHT,
      addFlight: BookAFlightActions.ADD_FLIGHT,
      addReturnFlight: BookAFlightActions.ADD_RETURN_FLIGHT

    });
  }

  onAddPassenger (val){
    this.passengers.push(val);
  }
  onRequestFlight(form){}

  onAddFlight(){}
  addReturnFlight(){}
}

export default alt.createStore(BookAFLightFormStore, 'BookAFLightFormStore');