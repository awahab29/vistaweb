/**
 * Created by Muhammad Faizan on 01-Feb-16.
 */
/* TODO: Whole Page will be rendered here.
*  TODO: Use container pattern, instead of component level*/

import React from 'react';
import alt from '../AltApp';
import AltContainer from 'alt-container';
import BAFFormStore from '../stores/BookAFLightFormStore';
import BAFMapStore from '../stores/BookAFLightMapStore';

/**
 * @type {ReactComponent} - A component with container that injects property from stores to component
 */
const BookAFlightPage = React.createClass({
  render() {
    return (
	    <AltContainer>
		    stores={
			    {
				    Form: BAFFormStore,
				    Map: BAFMapStore
			    }
	        }
		    <div/>
	    </AltContainer>
    );
  }
});

export default BookAFlightPage;

