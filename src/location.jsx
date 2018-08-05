import React from 'react';
// import ReactDOM from 'react-dom';
export default class Header extends React.Component{
	render(){
		return(
			<div className="findLocation">
				<div>
					Delivery Location
				</div>
				<div>
					<input type="text" placeholder="Enter your delivery area.." />
				</div>
				<div>
					<button>Detect Location</button>
				</div>
			</div>
			
		);
	}
}