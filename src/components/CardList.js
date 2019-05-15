import React from 'react';
import Card from './Card';
import Sun from '../icons/Sun.png';
import Cloudy from '../icons/Cloudy.png'; 
import PartlyCloudy from '../icons/PartlyCloudy.png';
import Rain from '../icons/Rain.png';
import Snow from '../icons/Snow.png';
import Storm from '../icons/Storm.png';
import Windy from '../icons/Windy.png';
import Fog from '../icons/Fog.png';

const CardList = ({ fetch }) => {
	const processedData = fetch.data.map((day, i) => {
		const returnObj = {
			high: Math.round(day.max_temp),
			low: Math.round(day.min_temp), 
			day: '',
		}; 
		const icon = day.weather.code; 
		const date = day.datetime.split('-')
		let dayOfWeek = new Date(date[0], date[1] - 1 , date[2]).toString().slice(0,3).toUpperCase(); 
		returnObj.day = dayOfWeek; 

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

		return returnObj; 
	});

	const cards = processedData.map((obj, i) => {
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
		<div className='mt3 dib br3 ba pa3 shadow-1 ml2 mr2' style={{backgroundColor: 'rgba(1, 22, 34,0.7)'}}>
			<h3 className='tl mb0 ml2 mt1' style={{color: 'rgb(44, 124, 167)'}}>{fetch.city_name}</h3>
			{cards}
		</div>

	)
}

export default CardList; 