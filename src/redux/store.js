import {createStore, combineReducers} from "redux";
import citiesReducer from "./reducers/citiesReducer";

let reducers = combineReducers({
    cities: citiesReducer
})

let store = createStore(reducers)

window.store = store

export default store