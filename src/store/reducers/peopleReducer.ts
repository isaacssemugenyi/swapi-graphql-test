import { IHomePageState } from "../../containers/HomePage/types";
import { GetAllPeopleQuery } from "../../generated/graphql";
import { ActionType } from "../action-types";
import { AllPeopleAction } from "../actions";


const intialState : IHomePageState = {
    getAllPeople: GetAllPeopleQuery
}

const reducer = (state = intialState, action: AllPeopleAction) => {
    switch(action.type){
        case ActionType.GET_ALL_PEOPLE:
            return state;
        case ActionType.GET_PREVIOUS_OR_NEXT_PEOPLE:
            return {...state, next: action.payload}
        default:
            return state;
    }
}

export default reducer;