import React from 'react';
// import ReactDOM from 'react-dom';

function Add(props){
	const {add_product,remove_product,quantity}=props;
	if(quantity===0){
	return(
		<div>
			<button className="add" onClick={add_product}>
				Add
			</button>
		</div>
	);
}
else{
	return(
		<span>
			<button className="add" onClick={remove_product}>-</button>
			<input type="text" className="add" value={quantity} readOnly/>
			<button className="add" onClick={add_product}>+</button>
		</span>
	);
}

}


export default class addProduct extends React.Component{
	render(){
		return(
			<Add {...this.props} />
		); 
	}
}

// value={quantity} onClick={onClick}
// const {onClick,quantity}=this.props;