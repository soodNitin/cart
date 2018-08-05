import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import Location from './location.jsx';
import Cart from './cart.jsx';
import Product from './product.jsx';
import './index.css';
import FlexBox from'./ui/flexbox.jsx';
import classNames from 'classnames';
class Restaurant extends React.Component{
	constructor(props){
		super(props);
		this.state={
			items:{
				1: {id:1,name:"Dal",price:160,quantity:0},
				2: {id:2,name:"roti",price:80,quantity:0},
				3: {id:3,name:"cold drink",price:40,quantity:0},
				4: {id:4,name:"water",price:20,quantity:0},
				5: {id:5,name:"Dal",price:160,quantity:0},
				6: {id:6,name:"roti",price:80,quantity:0},
				7: {id:7,name:"cold drink",price:40,quantity:0},
				8: {id:8,name:"water",price:20,quantity:0},
				9: {id:9,name:"Dal",price:160,quantity:0},
				10: {id:10,name:"roti",price:80,quantity:0},
				11: {id:11,name:"cold drink",price:40,quantity:0},
				12: {id:12,name:"water",price:20,quantity:0},
				13: {id:13,name:"Dal",price:160,quantity:0},
				14: {id:14,name:"roti",price:80,quantity:0},
				15: {id:15,name:"cold drink",price:40,quantity:0},
				16: {id:16,name:"water",price:20,quantity:0},
				17: {id:17,name:"Dal",price:160,quantity:0},
				18: {id:18,name:"roti",price:80,quantity:0},
				19: {id:19,name:"cold drink",price:40,quantity:0},
				20: {id:20,name:"water",price:20,quantity:0},
				21: {id:21,name:"Dal",price:160,quantity:0},
				22: {id:22,name:"roti",price:80,quantity:0},
				23: {id:23,name:"cold drink",price:40,quantity:0},
				24: {id:24,name:"water",price:20,quantity:0},
				25: {id:25,name:"Dal",price:160,quantity:0},
				26: {id:26,name:"roti",price:80,quantity:0},
				27: {id:27,name:"cold drink",price:40,quantity:0},
				28: {id:28,name:"water",price:20,quantity:0}


			},
			cartItems:[],
		}
	}
	handleScroll(event){
		const navbar=event.target;
		const sticky=navbar.offsetTop;
		if (window.pageYOffset  >= sticky) {
		    navbar.classList.add("sticky")
		  } 
		else {
		    navbar.classList.remove("sticky");
 	    }		
 	    event.stopPropagation();
	}
	componentDidMount() {
	    window.addEventListener('scroll', this.handleScroll);
  	}

	removeProduct(id){
		const {items,cartItems}=this.state;
		const product = items[id];
		product.quantity--;
		if(product.quantity===0){
			const newCart= cartItems.filter(cartItem => cartItem.id !== product.id);	
			console.log(newCart);
			this.setState({
				items,
				cartItems:newCart
			});
		}
		else{
			this.setState({
				items,
				cartItems
			});
		}
	}
	addProduct(id){
		const {items}=this.state;
		const product = items[id];
		product.quantity++;
		if(product.quantity===1){
			this.setState({
				items,
				cartItems:[...this.state.cartItems,product],
			});
		}
		else{
			this.setState({
				items,
				cartItems:[...this.state.cartItems],
			});			
		}

	}

	renderItems() {
		const {items} = this.state;
		const keys = Object.keys(items);
		return keys.map((id) => {
			const item = items[id];
			return (
				<Product item_details={item} key={id} add_product={()=>this.addProduct(id)} remove_product={()=>this.removeProduct(id)}/>
			);
		});
	}
	render(){
		const {cartItems}=this.state;
		return(
			<div className="container">
				<div className="restaurantBar">
					<FlexBox flex={3}>
						<Header />
					</FlexBox>
					<FlexBox flex={2}>
						<Location/>
					</FlexBox>
				</div>
				<div className="orderBar">
					<div className="products">
						<div className="bogo">
							Select two items with the BOGO tag and the lower priced one is free.
						</div>
						<div className="nav" onScroll="this.handleScroll">
							<ul className="nav-bar js-nav-bar">
								<li>Bogo Items</li>
								<li>Bestsellers</li>
								<li>Buy 1 Get 1 Free</li>
								<li>Shravan Specials</li>
								<li><input type="text" placeholder="Search Menu"/></li>
							</ul>
						</div>
						<FlexBox flex={3}>
							{this.renderItems()}
						</FlexBox>
					</div>	
					<FlexBox flex={2}>
						<Cart value={cartItems}  add_product={(id)=>{this.addProduct(id)}} remove_product={(id)=>{this.removeProduct(id)}} />
					</FlexBox>	
				</div>
 			</div>
		);
	}

}

ReactDOM.render(
		<Restaurant />
 		,document.getElementById('root')
);

