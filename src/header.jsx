import React from 'react';
// import ReactDOM from 'react-dom';
export default class Header extends React.Component{
	render(){
		return(
			<div className="header">
				<div>
					Order online from 
				</div>
				<div className="infobar">
					<div className="restaurant_name">Faasos</div>
					<div className="restaurant_rating">3.9</div>
				</div>
				<div className="locInfo">
					<div className="location">Karve Nagar, Pune</div>
					<div className="costing">
						<ul>
							<li>Cost &#8377;600 For two</li>
						</ul>	
					</div>
				</div>
				<div className="orderInfo">
					<div className="delivery_time">
						<span>Delivery Time</span> 
						<span>49 Minutes</span>
					</div>
					<div className="minOrder">
						<span>Minimum Order</span>  
						<span>&#8377;0.00</span>
					</div>
					<div className="pay">
						<span>Payment Method</span> 
						<span>Cash and online</span>
					</div>
					<div className="orderRatingStreak">
						<span>Recent Order Rating Streak</span>
					</div>					
				</div>								
			</div>
		);
	}
}