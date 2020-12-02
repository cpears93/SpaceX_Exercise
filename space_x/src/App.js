import React, { Component } from 'react';
import logo from './launch-home.png';
import './spacex-logo.png';
import './App.css';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        items: [],
        isLoaded: false,
      }

  }

  componentDidMount(){

      fetch('https://api.spacexdata.com/v3/launches')
          .then(res => res.json())
          .then(json => {
              this.setState({
                isLoaded: true,
                items: json,
                
              })
          });
  }


  render() {

      var { isLoaded, items } = this.state;

      if (!isLoaded) {
        return <div>Loading...</div>
      }

      else {

    return (
      <div className="App">
        <header className = "App-header" >
          <img src = {logo} className = "App-logo"
        alt = "logo" />
          <p>
            Space X App
            </p>
          <p>
        See below for a comprehensive record of Space X launches
      </p>
      <input type="text" defaultValue="Search for a Launch Year"/>

      <ul>
          {items.map(item => (
            <li key={item.id}>
                Mission Name: {item.mission_name} | 
                Launch Year: {item.launch_year} | 
                Launch Date: {item.launch_date_local}
            </li>
          ))};
      </ul>
    </header>
    </div>
    );
  }
 }
}

export default App;
