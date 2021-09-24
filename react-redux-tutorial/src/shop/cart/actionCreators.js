import actions from "./actions";
export const addToCart = (product) => {
	return { type: actions.ADD_TO_CART, payload: product };
};
export const emptyCart = () => {
	return { type: actions.EMPTY_CART };
};
export const removeFromCart = (id) => {
	return { type: actions.REMOVE_FROM_CART, id };
};
export const countCart = () => {
	return { type: actions.COUNT_CART };
};
export const totalCart = () => {
	return { type: actions.TOTAL_CART };
};
export const increaseQTY = (id) => {
	return { type: actions.INCREMENT, id };
};
export const decreaseQTY = (id) => {
	return { type: actions.DECREMENT, id };
};
