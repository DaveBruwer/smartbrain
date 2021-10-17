import React from 'react';
import './mainpage.css';

class Main_page extends React.Component {

  constructor() {
    super()
    this.state={
      imageUrl: 'https://www.nist.gov/sites/default/files/styles/1400_x_1400_limit/public/images/2018/11/27/18itl009_facial_recognition_graphic.jpg?itok=kbPRE20W',
      currentUser: ''
    }
  }

  updateImage = (_evnt) => {
    this.setState({imageUrl: 'loading.gif'});
    this.setState({imageUrl: _evnt.target.value});
  }

  componentDidMount() {
    if (this.props.name) {
      console.log('user detected');
      this.setState({currentUser: this.props.name});
    }
  }


  render() {
    return (
      <div className="App">
        <div className=''>'Welcome {this.state.currentUser}!'</div>
        <div className='input'>
          <input className='glassmorph inputbox' type='text' onChange={this.updateImage} placeholder='Type image location here.'/><br/>
          <button type='button' className='glassmorph detectBtn'>Detect</button><br/>
        </div>
        <div className='imageSpace'>
          <img alt='face' src={this.state.imageUrl} width="500" height="auto"/>
        </div>
      </div>
    );
  }
}

export default Main_page;