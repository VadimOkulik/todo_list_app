import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

const saveToLocalStorage = (state) => {
    localStorage.setItem('state', JSON.stringify(state));
};

const loadFromLocalStorage = () => {
    const state = localStorage.getItem('state');
    return state ? JSON.parse(state) : undefined;
};

const store = configureStore({ reducer: reducer, preloadedState: loadFromLocalStorage() });

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;