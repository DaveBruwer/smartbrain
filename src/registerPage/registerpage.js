import React from 'react';
import './registerpage.css';


class registerpage extends React.Component {

	constructor() {
		super()
		this.state={
			name: '',
			email: '',
			password: ''
		}
	}

	onNameChange = (evnt) => {
		this.setState({name: evnt.target.value});
	}

	onEmailChange = (evnt) => {
		this.setState({email: evnt.target.value});
	}

	onPasswordChange = (evnt) => {
		this.setState({password: evnt.target.value});
	}

	onRegister = () => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(resp => resp.json())
		.then(data => {
			if (data) {
				console.log(data);
				this.props.updateUser(data);
				this.props.onRouteChange('main');
			}
		})
	}

	render() {
		return (
		    <div className='signinform'>
		      <input className='glassmorph inputbox' type='text' placeholder='Name' onChange={this.onNameChange}/><br/>
		      <input className='glassmorph inputbox' type='text' placeholder='Email' onChange={this.onEmailChange}/><br/>
		      <input className='glassmorph inputbox' type='text' placeholder='Password' onChange={this.onPasswordChange}/><br/>
		      <button type='button' className='glassmorph signinBtn' onClick={this.onRegister}>Register</button><br/>
		    </div>
	    );
	}




}








/*const registerpage = ({onRouteChange}) => {
  return (
      <div className='signinform'>
        <input className='glassmorph inputbox' type='text' placeholder='Username'/><br/>
        <input className='glassmorph inputbox' type='text' placeholder='Password'/><br/>
        <input className='glassmorph inputbox' type='text' placeholder='Confirm Password'/><br/>
        <button type='button' className='glassmorph signinBtn' onClick={() => onRouteChange('main')}>Register</button><br/>
      </div>
    );
}*/


export default registerpage;