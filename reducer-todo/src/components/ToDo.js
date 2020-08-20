import React from 'react';

const ToDo = (props) => {
	return (
		<div
			className={props.item.completed ? 'completed' : ''}
			onClick={() =>
				props.dispatch({ type: 'TOGGLE_COMPLETED', payload: props.item.id })
			}
		>
			Item: {props.item.item}
		</div>
	);
};

export default ToDo;
