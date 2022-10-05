import { combineReducers, createStore } from "redux";
import { abilities } from "./reducers/reducers";

export const store = createStore(
    combineReducers({
        abilities,
    })
);