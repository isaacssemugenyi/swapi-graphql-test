import { ActionType } from "../action-types"

interface GetAllPeopleAction {
    type: ActionType.GET_ALL_PEOPLE
}

interface GetPreviousOrNextPeopleAction {
    type: ActionType.GET_PREVIOUS_OR_NEXT_PEOPLE
    payload: number
}

export type SinglePersonAction = {
    type: ActionType.GET_SINGLE_PERSON,
    payload: string
}


export type AllPeopleAction = GetAllPeopleAction | GetPreviousOrNextPeopleAction