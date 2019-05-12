import React from 'react';
import Card from './Card';

const CardList = ({ data, realData }) => {
	console.log(realData);
	let cards = data.map((x, i) => {
		return (
			<Card 
				key={i}
				day={x.day}
				icon={x.icon}
				high={x.high}
				low={x.low} />
		)
	})

	return (
		<div className='mt4 dib ba pa3'>
			<h3 className='tl mb0'>{realData.city.name}</h3>
			{cards}
		</div>

	)
}

export default CardList; 