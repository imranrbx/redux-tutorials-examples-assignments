import { combineReducers } from "redux";
//these are 3 actions related to counter reducer
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
// these are 3 action creators related to counter reducer
export const incr = (num) => {
    return { type: "INCREMENT", payload: num };
};
export const decr = (num) => {
    return { type: "DECREMENT", payload: num };
};
export const res = () => {
    return { type: "RESET" };
};
//define actions related to todo app
export const ADD_TODO = "ADD_TODO";
export const REM_TODO = "REM_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
//define action creators for todo app
const add = (todo) => {
    return { type: ADD_TODO, payload: todo };
};
const remove = (id) => {
    return { type: REM_TODO, payload: id };
};
const toggle = (id) => {
    return { type: TOGGLE_TODO, payload: id };
};

//define reducer for todo app
const todoReducer = (state = [], action = {}) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case REM_TODO:
            return state.filter((todo) => todo.id !== action.payload);
        case TOGGLE_TODO:
            return state.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            return state;
    }
};

// redux reducer for counter App.
const counterReducer = (state = { value: 1 }, action = {}) => {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + action.payload };
        case DECREMENT:
            return { value: state.value - action.payload };
        case RESET:
            return { value: 1 };
        default:
            return state;
    }
};

const rootReducer = combineReducers({ counter: counterReducer, todos: todoReducer });
export default rootReducer;
