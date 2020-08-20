import React, { useState, useReducer } from 'react';
import './App.css';
import { Reducer, InitialState } from './reducers/reducer';
import ToDoList from './components/ToDoList';

const App = () => {
	const [state, dispatch] = useReducer(Reducer, InitialState);
	const [toDos, setToDos] = useState('');

	const handleChanges = (e) => {
		setToDos(e.target.value);
	};

	return (
		<div className='App'>
			<h1>To Do</h1>
			<ToDoList toDos={state} dispatch={dispatch} />
			<form>
				<label>Item: </label>
				<input
					type='text'
					name='item'
					value={toDos}
					onChange={handleChanges}
				></input>
				<br />
			</form>
			<button
				onClick={() => {
					dispatch({ type: 'ADD_TODO', payload: toDos });
				}}
			>
				Submit
			</button>
			<button
				onClick={() => {
					dispatch({ type: 'CLEAR_COMPLETED' });
				}}
			>
				Clear
			</button>
		</div>
	);
};

export default App;
