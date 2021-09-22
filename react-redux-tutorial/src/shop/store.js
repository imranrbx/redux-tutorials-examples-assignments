import { createStore, combineReducers } from "redux";
import productsReducer from "./products/reducer";

const rootReducer = combineReducers({ products: productsReducer });
const store = createStore(rootReducer);
export default store;
