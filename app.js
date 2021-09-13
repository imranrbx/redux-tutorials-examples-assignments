import { createStore } from "redux";
const app = document.getElementById("root");
const increment = document.getElementById("inc");
const decrement = document.getElementById("dec");
//these are 3 actions related to counter reducer
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
// these are 3 action creators related to counter reducer
const incr = (num) => {
    return { type: "INCREMENT", payload: num };
};
const decr = (num) => {
    return { type: "DECREMENT", payload: num };
};
const res = () => {
    return { type: "RESET" };
};
const reset = document.getElementById("reset");
const counter = (state = 1, action = {}) => {
    switch (action.type) {
        case INCREMENT:
            return state + action.payload;
        case DECREMENT:
            return state - action.payload;
        case RESET:
            return 1;
        default:
            return state;
    }
};

const store = createStore(counter);
store.subscribe(() => {
    let state = store.getState();
    app.innerText = state;
    state < 10
        ? increment.removeAttribute("disabled")
        : increment.setAttribute("disabled", "disabled");
    state > 1
        ? decrement.removeAttribute("disabled")
        : decrement.setAttribute("disabled", "disabled");
});

window.onload = function () {
    store.dispatch({ type: "INIT" });
};
increment.addEventListener("click", () => {
    store.getState() < 10 && store.dispatch(incr(2));
});
decrement.addEventListener("click", () => {
    store.getState() > 1 && store.dispatch(decr(2));
});
reset.addEventListener("click", () => {
    store.dispatch(res());
});
