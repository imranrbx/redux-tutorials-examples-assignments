import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./shop/store";
import { fetchProducts } from "./shop/products/actionCreators";
const el = document.getElementById("root");
const fetchData = async (dispatch, getState) => {
	const res = await fetch("https://fakestoreapi.com/products");
	const products = await res.json();
	dispatch(fetchProducts(products));
};
store.dispatch(fetchData);
render(
	<Provider store={store}>
		<App />
	</Provider>,
	el
);
