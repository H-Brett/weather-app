import React, { Component } from 'react';
import './App.css';
import Sun from './icons/Sun.png';
import Cloudy from './icons/Cloudy.png'; 
import PartlyCloudy from './icons/PartlyCloudy.png';
import Rain from './icons/Rain.png';
import Snow from './icons/Snow.png';
import Storm from './icons/Storm.png';
import Windy from './icons/Windy.png';
import SearchBar from './SearchBar.js';
import CardList from './CardList.js'

const APIKEY = '2e14c8c248ffe44081b033c01ff6eb2b'; 

let fakeData = [
  {
    day: 'MON', 
    icon: Sun, 
    high: 68, 
    low: 34,
  },
  {
    day: 'TUE', 
    icon: Sun, 
    high: 75, 
    low: 40,
  },
  {
    day: 'WED', 
    icon: PartlyCloudy, 
    high: 55, 
    low: 32,
  },
  {
    day: 'THU', 
    icon: Storm, 
    high: 50, 
    low: 30,
  },
  {
    day: 'FRI', 
    icon: Rain, 
    high: 48, 
    low: 34,
  },
];

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      data: [], 
    }
  }


  getData = async (zipCode) => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&mode=json&units=imperial&appid=${APIKEY}`) 
    let json = await response.json(); 
    let data = await json; 
    this.setState({fetch: data}) 
    // let filteredData = data.filter((obj, i) => {
    //        return i === 0 || i == 39 || obj.dt_txt.includes('06:00:00') || obj.dt_txt.includes('15:00:00')
    //   }); 
  }    

  componentDidUpdate(prevProps, prevState) {

    let { fetch } = this.state; 
    let cityName = fetch.city.name;
    

    if(this.state.fetch !== prevState.fetch) {
      let list = [...this.state.data, <CardList key={cityName} data={fakeData} realData={fetch} />]
      this.setState({data: list})
    }
  }

  onSearchChange = (event) => {
    let { value } = event.target; 
    if(value.length === 5 && new RegExp(/[0-9]/).test(value)) { // tests that user input is 5 digits only
      this.getData(value);
      event.target.value = ''
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
