import {
	configureStore,
	createReducer,
	createAsyncThunk,
} from '@reduxjs/toolkit';
const fetchTodos = createAsyncThunk('todos/fetchTodos', () => {
	return fetch('https://jsonplaceholder.typicode.com/todos')
		.then((res) => res.json())
		.then((todos) => todos)
		.catch((err) => err);
});
const todosApi = createReducer(
	{
		todos: [],
	},
	(builder) => {
		builder
			.addCase(fetchTodos.pending, (state, action) => {
				state.loading = true;
				state.todos = [];
			})
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.loading = false;
				state.todos = action.payload;
			})
			.addCase(fetchTodos.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addDefaultCase((state, action) => {});
	},
);
// const todosApi = createSlice({
// 	name: 'todosApi',
// 	initialState: { todos: [], loading: false, error: null },
// 	reducers: {},
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(fetchTodos.pending, (state, action) => {
// 				state.loading = true;
// 				state.todos = [];
// 			})
// 			.addCase(fetchTodos.fulfilled, (state, action) => {
// 				state.loading = false;
// 				state.todos = action.payload;
// 			})
// 			.addCase(fetchTodos.rejected, (state, action) => {
// 				state.loading = false;
// 				state.error = action.payload;
// 			})
// 			.addDefaultCase((state, action) => {});
// 	},
// });
const rootReducer = {
	todosApi: todosApi,
};
const apiStore = configureStore({ reducer: rootReducer });
apiStore.dispatch(fetchTodos());
export default apiStore;
