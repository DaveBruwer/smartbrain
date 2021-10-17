import React from 'react';
import './nav.css';


const nav = ({route, onRouteChange}) => {
	if (route === 'main') {
		return (
	      <div className="App navigation">
	        <button type='button' id='signOutBtn' className='glassmorph' onClick={() => onRouteChange('signin')}>Sign-Out</button>
	      </div>
	    );
	} else if (route === 'signin') {
		return (
	      <div className="App navigation">
	        <button type='button' id='registerBtn' className='glassmorph' onClick={() => onRouteChange('register')}>Register</button>
	      </div>
	    );
	} else {
		return (
	      <div className="App navigation">
	        <button type='button' id='signInBtn' className='glassmorph' onClick={() => onRouteChange('signin')}>Sign-In</button>
	      </div>
	    );
	}
}

export default nav;