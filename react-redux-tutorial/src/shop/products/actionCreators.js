import actions from "./actions";

export const fetchProducts = (products) => {
    return { type: actions.GET_PRODUCTS, payload: products };
};
