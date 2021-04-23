import React, { Component } from 'react';
import './App.css'; 
import SearchBar from '../components/SearchBar.js';
import CardList from '../components/CardList.js';
import ErrorBoundary from '../components/ErrorBoundary.js'; 

const APIKEY = '5e50b89e4fe848c09c23c63048c86126'; 
const ZIPCODEKEY = 'QD83bIniR5FlO80H4QQFDDuFWV4i946TwoxYLLZNekQIYpL6VRO2COeLyW2XBbJO'; 
const CLIENTSIDEKEY = 'js-Euz5BCYjOkOPr4lapjBiFWLE6Gy706HRpebhcnxajNm6s5NFzreIR04vX1GZSF54'; // local
// const CLIENTSIDEKEY = 'js-MTNv13Zz6m1Ln4Y0uvkthHcHdMCAfyU8VRp77TiEbcLXuf8KXSFAGfD7Ki2iFzlF'; // githubpages

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      data: [], 
      fetch: {}, 
      city: '', 
      stateAbbr: '', 
      isError: false,  
    }
  };

  getWeatherData = async (city, state) => {
    try { 
      const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=US&state=${state}&units=i&days=5&key=${APIKEY}`);
      const json = await response.json(); 
      const data = await json; 

      this.setState({fetch: data}) 
    } catch(err) {
      this.setState({isError: true})
    }

    
  }    

  getCityData = async (zipCode, event) => {
    try {
      const response = await fetch(`https://www.zipcodeapi.com/rest/${CLIENTSIDEKEY}/info.json/${zipCode}/degrees`);
      const json = await response.json(); 
      const data = await json; 

      this.setState({
        city: data.city, 
        stateAbbr: data.state, 
      })
    } catch(err) {
      this.setState({isError: true})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.city !== prevState.city){ // if city received trigger weather api call 
      this.getWeatherData(this.state.city, this.state.stateAbbr)
    }
    
    if(this.state.fetch !== prevState.fetch) { // if new fetch, create new cardlist
      const list = [...this.state.data, <CardList key={this.state.city} fetch={this.state.fetch} />]
      this.setState({data: list, isError: false})
    }
  }

  onSearchChange = (event) => {
    const { value } = event.target; 
    if(value.length === 5 && new RegExp(/[0-9]/).test(value)) { // tests that user input is 5 digits only
      this.getCityData(value, event);
      event.target.value = '';
    }
  }

  onEnterKey = (event) => {
    if(event.which === 13){
      this.onSearchChange(event);
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='header mb2'>Forecast</h1>
        <SearchBar onSearchChange={this.onSearchChange} onEnterKey={this.onEnterKey}/>
        {
          Array.from(new Set(this.state.data))
        }    
      </div>
    );
  }
}

export default App;
