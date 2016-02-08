/**
 * Created by Muhammad Faizan on 11-Jan-16.
 */
import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';
import {greatPlaceStyle} from './MapStyle.js';

export default class MyGreatPlace extends React.Component {
    static propTypes = {
        text: React.PropTypes.string
    };

    static defaultProps = {};

    shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={greatPlaceStyle}>
                {this.props.text}
            </div>
        );
    }
}