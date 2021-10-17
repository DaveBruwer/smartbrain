import React from 'react';
import './App.css';
import MainPage from './mainPage/mainpage';
import SignInPage from './signInPage/signinpage';
import RegisterPage from './registerPage/registerpage';
import Nav from './nav/nav';
import brain from './icons8-brain-96.png';



class App extends React.Component {


  constructor() {
    super()
    this.state={
      route: 'main',
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  updateImage = (_evnt) => {
    this.setState({imageUrl: _evnt.target.value});
  }

  updateUser = (_user) => {
    this.setState({user: {
      id: _user.id,
      name: _user.name,
      email: _user.email,
      entries: _user.entries,
      joined: _user.joined
    }})
    console.log(this.state.user);
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {

    let route = (<RegisterPage />);

    if (this.state.route === 'main') { 
      route = (<MainPage name={this.state.user.name} />)
    } else if (this.state.route === 'signin') {
      route = (<SignInPage updateUser={this.updateUser} onRouteChange={this.onRouteChange} />)
    } else {
      route = (<RegisterPage updateUser={this.updateUser} onRouteChange={this.onRouteChange} />)
    };

    return (
      <div className="App">
        <Nav route={this.state.route} onRouteChange={this.onRouteChange} />
        <div className='logo'>
          <span className='glassmorph'><img alt='brain logo' src={brain} width='100px' height='auto'/></span>
        </div>
        { route }
      </div>
    );
  }
}

export default App;
