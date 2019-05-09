import React from 'react'; 

const Card = (props) => {
	return (
		<div className='dib ba ma2 pl4 pr4 br3 bg-light-blue grow box-shadow-3'>
			<span className='f3'>{props.day}</span><br />
			<img alt='...' src={props.icon} />
			<div>
				<span className='f4'>{props.high} </span><span className='f4'> {props.low}</span><br />
				<span>HI </span><span> LO</span>
			</div>
		</div>
	)
}

export default Card; 