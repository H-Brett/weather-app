import React from 'react';
import Card from './Card';

const CardList = ({data}) => {
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
		<div className='mt5'>
			{cards}
		</div>

	)
}

export default CardList; 