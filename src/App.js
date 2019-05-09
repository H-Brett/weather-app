import React from 'react';
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
const APIURL = 'api.openweathermap.org/data/2.5/forecast?zip=80634&mode=xml&appid=2e14c8c248ffe44081b033c01ff6eb2b'
//
fetch(APIURL).then(resp => console.log(resp))

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

function App() {
  return (
    <div className="App">
      <h1 className='header mb2'>Forecast</h1>
      <SearchBar />
      <CardList data={fakeData} />      
    </div>
  );
}

export default App;
