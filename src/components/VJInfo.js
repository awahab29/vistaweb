/**
 * Created by VD on 2/12/2016.
 */
/**
 * Created by Muhammad Faizan on 02-Feb-16.
 */
import React from 'react';
import Slider from 'material-ui/lib/slider';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TimePicker from 'material-ui/lib/time-picker';
import AirportInput from './Shared/AirportInput';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import {Link} from 'react-router';

class VJInfo extends React.Component {
  state = {

  };

  render() {

    return (
        <div className='form-container'>
          <form className='flight-form'>
            <Link to="detailInfo" params={{locationId: '545ce7f4e4b01d3ac6a0ccfe'}}>
              <RaisedButton primary={true} label="Founder's Notes"/>
            </Link>
            <Link to="detailInfo" params={{locationId: '545ce7f4e4b01d3ac6a0e'}}>
              <RaisedButton primary={true} label="VJ Lifestyle"/>
            </Link>

            <Link to="detailInfo" params={{locationId: '545ce7f4e4b01d3ac6a'}}>
              <RaisedButton primary={true} label="Our Fleet"/>
            </Link>

            <Link to="detailInfo" params={{locationId: '545ce7f4e4b01d3ac6a0'}}>
              <RaisedButton primary={true} label="Contact"/>
            </Link>
            <Link to="detailInfo" params={{locationId: '545ce7f4e4b01d3ac6a'}}>
              <RaisedButton primary={true} label="Terms And Conditions"/>
            </Link>

            <p className='flight-form-label'>Founder's Note</p>
            <input type="button" className="waves-effect waves-light btn" value="Founder's Note" />


            <p className='flight-form-label'>VJ Lifestyle</p>

            <p className='flight-form-label'>Our Fleet</p>
            <p className='flight-form-label'>Contact</p>
            <p className='flight-form-label'>Terms And Conditions</p>




          </form>
        </div>
    );
  }
}

export default VJInfo;

