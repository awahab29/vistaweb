/**
 * Created by Muhammad Faizan on 26-Jan-16.
 */
import React from 'react';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TimePicker from 'material-ui/lib/time-picker';
import Slider from 'material-ui/lib/slider';

class DateTimePicker extends React.Component {
   onChangeSlider(event, value){
  console.log('changed',value);}
  render() {
    return (
      <div className="container">
	      <DatePicker
		      id = "myDatepicker"
		      hintText="Inline (AutoOk)"
		      container="inline"
		      autoOk={true}
		      onChange={this.handleChange}/>
	      <TimePicker
		      format="ampm"
		      hintText="12hr Format" />
		<Slider ref="slider"
				name="slider"  step={1} min={1} max={10} value={2} onChange={this.onChangeSlider}/>


      </div>

    );
  }
}

DateTimePicker.propTypes = {};
DateTimePicker.defaultProps = {};

export default DateTimePicker;
