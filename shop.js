import { createStore, applyMiddleware, compose } from "redux";
const app = document.getElementById("app");
const fetchProducts = (url) => {
    return fetch(url)
        .then((res) => res.json())
        .then((products) => ({ type: "FETCHED", payload: products }));
};
const fetchMiddleware =
    ({ getState, dispatch }) =>
    (next) =>
    (action) => {
        console.log(typeof action);
        if (typeof action.then !== "function") {
            return next(action);
        }
        return Promise.resolve(action).then(dispatch);
    };
const productsReducer = (state = { loading: false, products: [] }, action = {}) => {
    switch (action.type) {
        case "INIT":
            return { ...state, loading: true };
        case "FETCHED":
            return {
                ...state,
                loading: false,
                products: [...state.products, ...action.payload],
            };
        default:
            return state;
    }
};

const store = createStore(
    productsReducer,
    compose(
        applyMiddleware(fetchMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
store.subscribe(() => {
    const { loading, products } = store.getState();
    app.innerHTML = loading ? "<li>Fetching Products...</li>" : "";
    products.length > 0 &&
        products.forEach((product) => {
            const li = document.createElement("li");
            const text = document.createTextNode(product.title);
            const price = document.createTextNode(product.price);
            li.appendChild(text);
            li.appendChild(price);
            app.appendChild(li);
        });
});
store.dispatch({ type: "INIT" });
store.dispatch(fetchProducts("https://fakestoreapi.com/products"));
