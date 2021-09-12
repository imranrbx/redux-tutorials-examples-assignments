import { createStore } from "redux";
const app = document.getElementById("root");
const increment = document.getElementById("inc");
const decrement = document.getElementById("dec");
const reset = document.getElementById("reset");
const counter = (state = 1, action = {}) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return 1;
        default:
            return state;
    }
};

const store = createStore(counter);
store.subscribe(() => (app.innerText = store.getState()));

window.onload = function () {
    store.dispatch({ type: "INIT" });
};
increment.addEventListener("click", () => {
    store.dispatch({ type: "INCREMENT" });
});
decrement.addEventListener("click", () => {
    store.dispatch({ type: "DECREMENT" });
});
reset.addEventListener("click", () => {
    store.dispatch({ type: "RESET" });
});
