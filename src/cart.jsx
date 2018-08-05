import React from 'react';
// import ReactDOM from 'react-dom';
import AddProduct from './addProduct.jsx';

export default class Cart extends React.Component{
	constructor(props){
		super(props);
		this.state={
		
		};
	}
	render(){
		const {value, add_product,remove_product}=this.props;
		return(
			<div>
				<div>
					Your Order
				</div>
				<div>
					{value.map((item,key) => (
						<div className="productsInCart" key={key}>
							<div>
								{item.name} {item.price} {item.quantity}
							</div>
							<AddProduct quantity={item.quantity}  add_product={()=>add_product(item.id)} remove_product={()=>remove_product((item.id))} />
						</div>
					))}
				</div>
			</div>
		);
	}
}
//  onClick ={()=>onClick(item.id)}