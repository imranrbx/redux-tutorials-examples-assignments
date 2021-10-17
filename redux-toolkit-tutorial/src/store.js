import { configureStore, createSlice, nanoid } from '@reduxjs/toolkit';
//counter action creators
// export const increment = createAction('counter/increment');
// export const decrement = createAction('counter/decrement');
// // todo action creators
// export const addTodo = createAction('todos/addTodo', (text) => {
// 	return {
// 		payload: {
// 			id: nanoid(),
// 			text: text,
// 			completed: false,
// 			createdAt: new Date().toISOString(),
// 		},
// 	};
// });
// export const remTodo = createAction('todos/remTodo');
// export const upTodo = createAction('todos/upTodo');

const logger = (store) => (next) => (action) => {
	console.log(action, store.getState());
	next(action);
};
//recommended way of creating reducer with createReducer API Builer Notation.
// const countReducer = createReducer({ value: 1 }, (builder) => {
// 	builder
// 		.addCase(increment, (state, action) => {
// 			state.value++;
// 		})
// 		.addCase(decrement, (state, action) => {
// 			state.value--;
// 		})
// 		.addDefaultCase((state, action) => {});
// });
// const todosReducer = createReducer({ todos: [] }, (builder) => {
// 	builder
// 		.addCase(addTodo, (state, action) => {
// 			const found = state.todos.filter(
// 				(todo) =>
// 					todo.text.toLowerCase() ===
// 					action.payload.text.toLowerCase()
// 			);
// 			if (found.length === 0) state.todos.push(action.payload);
// 		})
// 		.addCase(remTodo, (state, action) => {
// 			state.todos = state.todos.filter(
// 				(todo) => todo.id !== action.payload
// 			);
// 		})
// 		.addCase(upTodo, (state, action) => {
// 			state.todos = state.todos.map((todo) =>
// 				todo.id === action.payload
// 					? { ...todo, completed: !todo.completed }
// 					: todo
// 			);
// 		})
// 		.addDefaultCase((state, action) => {});
// });
// this is another way to create Reducer with Object Notation

// const countReducer = createReducer(
// 	{ value: 1 },
// 	{
// 		[increment]: (state, action) => {
// 			state.value++;
// 		},
// 		[decrement]: (state, action) => {
// 			state.value--;
// 		},
// 	}
// );
const counter = createSlice({
	name: 'counter',
	initialState: { value: 1 },
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
	},
});
const todos = createSlice({
	name: 'todos',
	initialState: { todos: [] },
	reducers: {
		addTodo: {
			reducer: (state, action) => {
				const found = state.todos.filter(
					(todo) =>
						todo.text.toLowerCase() ===
						action.payload.text.toLowerCase()
				);
				if (found.length === 0)
					state.todos.push(action.payload);
			},

			prepare: (text) => {
				const id = nanoid();
				return {
					payload: {
						id,
						text,
						comp0leted: false,
						createdAt: new Date().toISOString(),
					},
				};
			},
		},

		remTodo: (state, action) => {
			state.todos = state.todos.filter(
				(todo) => todo.id !== action.payload
			);
		},
		upTodo: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload
					? { ...todo, completed: !todo.completed }
					: todo
			);
		},
	},
});
const rootReducer = {
	reducer: {
		counter: counter.reducer,
		todos: todos.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
};
const store = configureStore(rootReducer);
export const { increment, decrement } = counter.actions;
export const { addTodo, remTodo, upTodo } = todos.actions;
export default store;
