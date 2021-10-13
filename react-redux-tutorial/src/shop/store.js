import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose,
} from "redux";
import productsReducer from "./products/reducer";
import cartReducer from "./cart/reducer";
import thunkMiddleware from "redux-thunk";
const logger =
	({ getState, dispatch }) =>
	(next) =>
	(action) => {
		next(action);
	};
const rootReducer = combineReducers({
	products: productsReducer,
	cart: cartReducer,
});
const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(logger, thunkMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
export default store;
