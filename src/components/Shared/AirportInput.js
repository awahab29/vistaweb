/**
 * Created by Muhammad Faizan on 03-Feb-16.
 */
import React from 'react';

const String = React.PropTypes.string;

class AirportInput extends React.Component {

	render() {
		return (
			<div>
				<p className='flight-form-label' value={this.props.label}>{this.props.label}</p>
				<p className='flight-form-input-container'>
					<input name={this.props.name} className='flight-form-input' type='text' placeholder={this.props.placeholder} value={this.props.value}/>
				</p>
			</div>
		);
	}
}

AirportInput.propTypes = {
	name: String,
	label: String,
	placeholder: String,
	value: String
};
AirportInput.defaultProps = {};

export default AirportInput;
