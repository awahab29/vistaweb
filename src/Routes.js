/**
 * Created by Muhammad Faizan on 07-Jan-16.
 */

import React from 'react'
import { Router, Route, Link, IndexRoute, History} from 'react-router';
import Locations from './components/Locations';
import JourneysListing from './pages/JourneysListing';
import Home from './components/Home';
import Suggest  from './components/AutoComplete';
import Mapping  from './components/Map';
import Storage  from './components/StorageComponent';
import LoginForm  from './pages/LoginForm';
import Map from './components/MapContainer';
import Directions  from './components/RouteMap';
import Arithmetic  from './components/cacheComp';
import AuthorizedView from './components/AuthorizedView'
import AppPage  from './pages/AppPage';
import DateTime from './components/DateTimePicker.js';
import BookAFlightForm from './components/BookAFlightForm';
import { browserHistory  } from 'react-router';

const Routes = (
<Router  history={browserHistory }>
  <Route path="/" component={AppPage}>
    <IndexRoute component={Home}/>
    <Route path="home" component={Home} />
    <Route path="location" component={Locations}/>
    <Route path="routemap" component={Directions}/>
    <Route path="map" component={Map}/>
    <Route path="login" component={LoginForm}/>
    <Route path="autocomplete" component={Suggest}/>
    <Route path="storage" component={Storage}/>
    <Route path="arithmetic" component={Arithmetic}/>
    <Route path="journeys" component={JourneysListing}/>
    <Route path="auth" component={AuthorizedView}/>
    <Route path="date-time" component={DateTime}/>
    <Route path="baf" component={BookAFlightForm}>
      <Route path="/auth" component={AuthorizedView} />
    </Route >

  </Route>
</Router>);

module.exports = Routes;
