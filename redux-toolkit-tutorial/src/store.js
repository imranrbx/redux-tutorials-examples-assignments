import {
	configureStore,
	createAction,
	createReducer,
} from '@reduxjs/toolkit';

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
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
// this is another way to create Reducer with Object Notation

const countReducer = createReducer(
	{ value: 1 },
	{
		[increment]: (state, action) => {
			state.value++;
		},
		[decrement]: (state, action) => {
			state.value--;
		},
	}
);
const rootReducer = {
	reducer: {
		counter: countReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
};
const store = configureStore(rootReducer);
export default store;
