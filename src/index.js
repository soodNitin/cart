import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import Location from './location.jsx';
import Cart from './cart.jsx';
import Product from './product.jsx';
import './index.css';
import FlexBox from'./ui/flexbox.jsx';
class Restaurant extends React.Component{
	constructor(props){
		super(props);
		this.state={
			items:{
				1: {id:1,name:"Dal",price:160,quantity:0},
				2: {id:2,name:"roti",price:80,quantity:0},
				3: {id:3,name:"cold drink",price:40,quantity:0},
				4: {id:4,name:"water",price:20,quantity:0}
			},
			cartItems:[],
		}
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
//  onClick={()=>{this.addProduct(id);this.removeProduct(id)}}
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
					<FlexBox flex={3}>
						{this.renderItems()}
					</FlexBox>
					<FlexBox flex={2}>
						<Cart value={cartItems}  add_product={(id)=>{this.addProduct(id)}} remove_product={(id)=>{this.removeProduct(id)}} />
					</FlexBox>	
				</div>
 			</div>
		);
	}
//   onClick={(id)=>{this.addProduct(id)}}

}

ReactDOM.render(
		<Restaurant />
 		,document.getElementById('root')
);

