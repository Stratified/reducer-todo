export const InitialState = {
	items: [
		{
			item: 'Learn about reducers',
			completed: false,
			id: 3892987589,
		},
	],
};

export const Reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				items: [...state.items, { item: action.payload, id: new Date() }],
			};
		case 'TOGGLE_COMPLETED':
			console.log('Toggle complete running.');
			const newToDoList = {
				items: state.items.map((toDo) => {
					if (toDo.id === action.payload) {
						console.log(toDo.id, action.payload);
						return { ...toDo, completed: !toDo.completed };
					} else {
						console.log(toDo.id, action.payload);
						return toDo;
					}
				}),
			};
			return newToDoList;
		case 'CLEAR_COMPLETED':
			return {
				items: state.items.filter((item) => item.completed !== true),
			};
		default:
			return state;
	}
};
