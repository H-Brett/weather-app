import React, { Component } from 'react';

class ErrorBoundry extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			hasError: false, 
		}
	}

	componentDidCatch(error, info) {
		this.setState({hasError: true})
	}

	render() {
		const { hasError } = this.state; 

		if (hasError) {
			return (
				<div className='dib'>
					<h1>Oops! Something went wrong!</h1>
				</div>
			)
		}
		return this.props.children; 
	}
}

export default ErrorBoundry; 