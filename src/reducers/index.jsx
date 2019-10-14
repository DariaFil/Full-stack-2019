import {createStore, combineReducers, applyMiddleware} from 'redux';
import {user} from "./user";



const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

const saver = store => next => action => {
    let result = next(action);
    localStorage["trello"] = JSON.stringify(store.getState());
    return result;
};

const initStorage = (initialState = {}) => {
    if (localStorage.getItem("trello") !== null) {
        return JSON.parse(localStorage.getItem("trello"));
    } else {
        localStorage.setItem("trello", JSON.stringify(initialState));
        return initialState;
    }
};

export const storeFactory = (initialState = {}) => (
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({
            user,
        }),
        initStorage(initialState)
    )
);

