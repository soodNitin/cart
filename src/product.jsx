import React from 'react';
// import ReactDOM from 'react-dom';
import AddProduct from './addProduct.jsx';

export default class Product extends React.Component{
	constructor(props){
		super(props);
		this.state={
			
		};
	}
	render(){
		const {item_details,add_product,remove_product}=this.props;
		return(
            <div className="product">
				<div>
					{item_details.name} 
				</div>
				<div>
					{item_details.price}
				</div>
				<div>
					<AddProduct quantity={item_details.quantity} add_product={()=>add_product(item_details.id)} remove_product={()=>remove_product(item_details.id)}/>
				</div>
			</div>	
		);
	}	
}
  