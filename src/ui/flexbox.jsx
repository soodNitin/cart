import React from 'react';

export default (props)=> {
	const {flex, children} = props;
	return (
		<div className="flex" style={{flex: flex}}>
			{children}
		</div>
	);
}