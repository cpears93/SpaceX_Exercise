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
        search: 'Year',
        postList: [],
        isOldestFirst: true
      };
  }

  updateSearch(event){
    this.setState({search: event.target.value})
  }

  sortByDate(){
    const {postList} = this.state
    let newPostList = postList
    if (this.state.isOldestFirst){
      newPostList.sort((a,b)=> a.launch_year < b.launch_year)
    } else {
      newPostList.sort((a,b)=> a.launch_year > b.launch_year)
    }
    this.setState({
      isOldestFirst: !this.state.isOldestFirst,
      postList: newPostList
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

      <ul>
        {/* {this.launch_year.map((launch_year) => {
          return <launch year={launch_year}
              key={launch_year.id}/>
        })} */}
      </ul>

      <input type="text" 
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}/>

      <input type="Button"
          value={this.state.sortByDate}
          onChange={this.sortByDate.bind(this)}>
      </input>

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
