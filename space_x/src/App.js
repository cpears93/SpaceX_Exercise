import React, { Component } from 'react';
import logo from './launch-home.png';
import './spacex-logo.png';
import './App.css';

class App extends Component {

  constructor(props) {
      super(props);
      this.toggleSortDate = this.toggleSortDate.bind(this)
      this.state = {
        items: [],
        isLoaded: false,
        search: 'Search By Year',
        button: 'Sort by date',
        postList: [],
        isOldestFirst: true
      };
  }

  state = {
    sort: 'asc',
    postList: []
  }

  updateSearch(event){
    this.setState({search: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  handleInputChange = (event) => {
    event.preventDefault()
    console.log(event)
    console.log(event.target.value)
    console.log(event.target.launch_year)
    this.setState({
      [event.target.launch_year]: event.target.value
    })
  }

  toggleSortDate (event) {
    this.sortByDate()
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

      const {postList, sortType} = this.state;

      const sorted = postList.sort ( (a, b) => {
        const isReversed = (sortType === 'asc') ? 1 : -1;
        return isReversed * a.launch_year.localCompare(b.launch_year)
      });
  
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

      <form onSubmit={this.handleSubmit}>
        <p><input type='text' placeholder='Search Year'/></p>
        <p><button>Sort Ascending</button></p>
        <p><button>Sort Descending</button></p>
      </form>

      <div className="row">
        {
          sorted.map( (mission_name, launch_year, launch_date_local) => {
                return this.launch_year(mission_name, launch_year, launch_date_local);
          })
        }  
      </div>
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
