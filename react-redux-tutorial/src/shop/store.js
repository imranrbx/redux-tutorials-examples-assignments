import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose,
} from "redux";
import productsReducer from "./products/reducer";
import cartReducer from "./cart/reducer";

const logger =
	({ getState, dispatch }) =>
	(next) =>
	(action) => {
		console.log(action, getState);
		next(action);
	};
const rootReducer = combineReducers({
	products: productsReducer,
	cart: cartReducer,
});
const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(logger),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
export default store;
