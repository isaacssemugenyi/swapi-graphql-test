import { combineReducers } from "redux";
import peopleReducer from "./peopleReducer";
import singlePersonReducer from "./singlePersonReducer";

const reducers = combineReducers({
    people: peopleReducer,
    singlePerson: singlePersonReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>