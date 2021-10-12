import actions from "./actions";
const addToCart = (product) => {
	return { type: actions.ADD_TO_CART, payload: product };
};
const emptyCart = () => {
	return { type: actions.EMPTY_CART };
};
const removeFromCart = (id) => {
	return { type: actions.REMOVE_FROM_CART, id };
};
const countCart = () => {
	return { type: actions.COUNT_CART };
};
const totalCart = () => {
	return { type: actions.TOTAL_CART };
};
const increaseQTY = (id) => {
	return { type: actions.INCREMENT, id };
};
const decreaseQTY = (id) => {
	return { type: actions.DECREMENT, id };
};
const cartActions = {
	addToCart,
	removeFromCart,
	countCart,
	totalCart,
	increaseQTY,
	decreaseQTY,
	emptyCart,
};

export default cartActions;
