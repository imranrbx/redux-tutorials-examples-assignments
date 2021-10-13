import actions from "./actions";
export const fetchProducts = (products) => {
	return { type: actions.GET_PRODUCTS, payload: products };
};
const productActions = {
	fetchProducts,
};
export default productActions;
