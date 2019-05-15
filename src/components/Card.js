import React from 'react'; 

const Card = (props) => {
	return (
		<div className='dib ba ma2 pl4 pr4 br3 grow shadow-3' style={{backgroundColor: 'rgb(0, 85, 155)'}}>
			<span className='f3 fw7' style={{color: 'white'}}>{props.day}</span><br />
			<img alt='...' src={props.icon} />
			<div>
				<span className='f4' style={{color: 'white'}}>{props.high} </span><span className='f4' style={{color: 'white'}}> {props.low}</span><br />
				<span style={{color: 'rgba(255, 255, 255, 0.7)'}}>HI </span><span style={{color: 'rgba(255, 255, 255, 0.7)'}}> LO</span>
			</div>
		</div>
	)
}

export default Card; 