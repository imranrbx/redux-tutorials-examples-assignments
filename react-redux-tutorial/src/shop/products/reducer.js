import actions from "./actions";
const productsReducer = (state = [], action = {}) => {
    switch (action.type) {
        case actions.GET_PRODUCTS:
            return action.payload;

        default:
            return state;
    }
};
export default productsReducer;
