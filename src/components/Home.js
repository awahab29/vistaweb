/**
 * Created by VD on 07-Jan-16.
 */
import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/lib/raised-button';
class Home extends React.Component {
  render() {
    return (
        <div>
          <Link to="/location">
            <RaisedButton primary={true} label="Tokenizer"/>
          </Link>
          <Link to="/map">
            <RaisedButton secondary={true} label="Map"/>
          </Link>
          <Link to="/journeys">
            <RaisedButton primary={true} label="XML2Json"/>
          </Link>
          <Link to="/autocomplete">
            <RaisedButton secondary={true} label="Autocomplete & Datepicker"/>
          </Link>
          <Link to="/storage">
            <RaisedButton primary={true} label="Local Storage"/>
          </Link>
          <Link to="/arithmetic">
            <RaisedButton secondary={true} label="Cache"/>
          </Link>
          <Link to="/login">
            <RaisedButton primary={true} label="Login"/>
          </Link>
          <Link to="/auth">
            <RaisedButton secondary={true} label="Auth"/>
          </Link>
          <Link to="/date-time">
            <RaisedButton primary={true} label="Date Time & Slider"/>
          </Link>
          <Link to="/baf">
            <RaisedButton secondary={true} label="Book A Flight Form"/>
          </Link>

        </div>

    );
  }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
