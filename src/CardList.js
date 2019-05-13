import React from 'react';
import Card from './Card';
import Sun from './icons/Sun.png';
import Cloudy from './icons/Cloudy.png'; 
import PartlyCloudy from './icons/PartlyCloudy.png';
import Rain from './icons/Rain.png';
import Snow from './icons/Snow.png';
import Storm from './icons/Storm.png';
import Windy from './icons/Windy.png';
import Fog from './icons/Fog.png';


const CardList = ({ fetch }) => {


	let processedData = fetch.data.map((day, i) => {
		let returnObj = {
			high: Math.round(day.max_temp),
			low: Math.round(day.min_temp), 
		}; 
		let icon = day.weather.code; 
		let date = new Date().getDay() + i; 
		
		if(icon  <300) {
			returnObj.icon = Storm; 
		} else if ( icon >= 300 && icon < 600 ) {
			returnObj.icon = Rain; 
		} else if ( icon >= 600 && icon < 700 ) {
			returnObj.icon = Snow; 
		} else if ( icon >= 700 && icon < 800 ) {
			returnObj.icon = Fog;
		} else if ( icon === 801 || icon === 802 ) {
			returnObj.icon = PartlyCloudy; 
		} else if ( icon === 803 || icon === 804 ) {
			returnObj.icon = Cloudy; 
		} else {
			returnObj.icon = Sun; 
		}

		switch( date ) {
			case 0: 
				returnObj.day = 'SUN'
				break; 
			case 1:
				returnObj.day = 'MON'
				break;
			case 2:
				returnObj.day = 'TUE'
				break;
			case 3: 
				returnObj.day = 'WED'
				break;
			case 4: 
				returnObj.day = 'THU'
				break;
			case 5: 
				returnObj.day = 'FRI'
				break;
			case 6: 
				returnObj.day = 'SAT'
				break;
			default: 
				break; 
		}

		return returnObj; 
	});

	let cards = processedData.map((obj, i) => {
		return (
			<Card 
				key={i}
				day={obj.day}
				icon={obj.icon}
				high={obj.high}
				low={obj.low} />
		)
	})

	return (
		<div className='mt4 dib ba pa3'>
			<h3 className='tl mb0'>{fetch.city_name}</h3>
			{cards}
		</div>

	)
}

export default CardList; 