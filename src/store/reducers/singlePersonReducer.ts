import { ActionType } from "../action-types";
import { SinglePersonAction } from "../actions";

const reducer = (state = {}, action: SinglePersonAction) => {
    switch (action.type) {
        case ActionType.GET_SINGLE_PERSON:
            return {...state,  name: action.payload }
        default:
            return state;
    }
}

export default reducer;