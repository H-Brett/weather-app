import React from 'react'; 

const SearchBar =  () => {
	return (
		<div className='pa2 tc'>
			<input  
				className='tc pa3 ba br2 bg-light-blue' 
				type='search' 
				placeholder='Enter Zip Code' />
		</div>
	)
}

export default SearchBar; 