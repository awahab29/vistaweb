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

import Map from './MapContainer';
import AltContainer from 'alt-container';
import MarkerStore from '../stores/MarkerStore';
import MarkerAction from '../actions/MarkerAction';


class BookAFlightForm extends React.Component {
  state = {
	open: false
  };
  handleOpen = () => {
	this.setState({open: true});
  };

  handleClose = () => {
	this.setState({open: false});
  };
  render() {
	const actions = [
	  <FlatButton
		  label="Cancel"
		  secondary={true}
		  onTouchTap={this.handleClose} />,
	  <FlatButton
		  label="Submit"
		  primary={true}
		  onTouchTap={this.handleClose} />,
	];
    return (
	    <div className='form-container'>
	      <form className='flight-form'>
		      <p className='flight-form-label'>Departure Date</p>
		      <p className='flight-form-input-container'>
				<DatePicker
					id = "myDatepicker"
					hintText="Inline (AutoOk)"
					container="inline"
					autoOk={true}
					onChange={this.handleChange}/>
				<TimePicker
					format="ampm"
					hintText="12hr Format" />
		      </p>
		      <AirportInput name={'from'} label={'From'} placeholder={"Select Departure Airport "} value={null} />
		      <AirportInput name={'destination'} label={'Destination'} placeholder={"Select Arrival Airport "} value={null} />
		      
		      <p className='flight-form-label'>Aircraft</p>
		      <p className='flight-form-input-container'>
			      <input name='aircraft' className='' type='text' placeholder="Select" />
				<RaisedButton label="Select Aircraft" onTouchTap={this.handleOpen} />
				<Dialog
					title="Select Aircraft"
					actions={actions}
					modal={true}

					open={this.state.open}
					>
				  This dialog spans the entire width of the screen.
				</Dialog>
		      </p>
		      <p className='flight-form-label'>No of Passengers</p>
		      <p>

				<Slider defaultValue={0.5}/>
		      </p>



			<p className='flight-form-label'>

			  <Map/>

			</p>

	      </form>
	    </div>
    );
  }
}

BookAFlightForm.propTypes = {};
BookAFlightForm.defaultProps = {};

export default BookAFlightForm;

