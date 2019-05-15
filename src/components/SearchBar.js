import React from 'react'; 

const SearchBar = ({onSearchChange, onEnterKey}) => {
	return (
		<div className='pa2 tc'>
			<input  
				className='tc pa3 ba br2 b--black bg-light-blue' 
				type='search' 
				placeholder='Enter Zip Code' 
				onBlur={onSearchChange} 
				onKeyDown={onEnterKey}
				/>
			<button className="pa3 ba br2 b--black ml2 bg-light-blue " type="button">Submit</button>
		</div>
	)
}

export default SearchBar; 