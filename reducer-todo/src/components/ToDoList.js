import React from 'react';
import ToDo from './ToDo';

const ToDoList = (props) => {
	return (
		<div>
			{props.toDos.items.map((toDo) => (
				<ToDo key={toDo.id} item={toDo} dispatch={props.dispatch} />
			))}
		</div>
	);
};

export default ToDoList;
