import React, { Component } from 'react';
import './App.css';
import SearchBar from '../components/SearchBar.js';
import CardList from '../components/CardList.js'

const APIKEY = ''; 
// const ZIPCODEKEY = ''; 
const CLIENTSIDEKEY = '';

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      data: [], 
      fetch: {}, 
      city: '', 
      stateAbbr: '',  
    }
  };

  getWeatherData = async (city, state) => {
    let response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=US&state=${state}&units=i&days=5&key=${APIKEY}`);
    let json = await response.json(); 
    let data = await json; 
    this.setState({fetch: data}) 
  }    

  getCityData = async (zipCode) => {
    let response = await fetch(`http://www.zipcodeapi.com/rest/${CLIENTSIDEKEY}/info.json/${zipCode}/degrees`);
    let json = await response.json(); 
    let data = await json; 
    this.setState({
      city: data.city, 
      stateAbbr: data.state, 
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.city !== prevState.city){ // if city received trigger weather api call 
      this.getWeatherData(this.state.city, this.state.stateAbbr)
    }
    
    if(this.state.fetch !== prevState.fetch) { // if new fetch, create new cardlist
      let list = [...this.state.data, <CardList key={this.state.city} fetch={this.state.fetch} />]
      this.setState({data: list})
    }
  }

  onSearchChange = (event) => {
    let { value } = event.target; 
    if(value.length === 5 && new RegExp(/[0-9]/).test(value)) { // tests that user input is 5 digits only
      this.getCityData(value);
      value = ''
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='header mb2'>Forecast</h1>
        <SearchBar onSearchChange={this.onSearchChange} />
        {
          this.state.data
        }    
      </div>
    );
  }
}

export default App;
