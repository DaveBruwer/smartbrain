import React from 'react';
import './signinpage.css';

class signinpage extends React.Component {

	constructor() {
	  super()
	  this.state={
	    signInEmail: '',
	    signInPassword: ''
	  }
	}

	onEmailChange = (evnt) => {
		this.setState({signInEmail: evnt.target.value});
	}

	onPasswordChange = (evnt) => {
		this.setState({signInPassword: evnt.target.value});
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(resp => resp.json())
		.then(data => {
			if (data.id) {
				this.props.updateUser(data);
				this.props.onRouteChange('main');
			}
		})
	}

	render() {
		return (
		    <div className="App">
		      <div className='signinform'>
		        <input className='glassmorph inputbox' type='text' onChange={this.onEmailChange} placeholder='Email'/><br/>
		        <input className='glassmorph inputbox' type='text' onChange={this.onPasswordChange} placeholder='Password'/><br/>
		        <button type='button' className='glassmorph signinBtn' onClick={this.onSubmitSignIn}>Sign In</button><br/>
		      </div>
		    </div>
	    )
	}
}

export default signinpage;