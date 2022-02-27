import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { SinglePersonAction, AllPeopleAction } from "../actions/index"

export const getAllPeople = () => {
    return (dispatch: Dispatch<AllPeopleAction>) => {
        // async calls
        dispatch({
            type: ActionType.GET_ALL_PEOPLE
        })
    }
}

export const getNextOrPreviousAllPeople = (page: number) => {
    return (dispatch: Dispatch<AllPeopleAction>) => {
        // async calls
        dispatch({
            type: ActionType.GET_PREVIOUS_OR_NEXT_PEOPLE,
            payload: page
        })
    }
}

export const getSinglePerson = (name: string) => {
    return (dispatch: Dispatch<SinglePersonAction>) => {
        dispatch({
            type: ActionType.GET_SINGLE_PERSON,
            payload: name
        })
    }
}

// export function simulateHttpRequest(action: ArticleAction) {
//     return (dispatch: DispatchType) => {
//       setTimeout(() => {
//         dispatch(action)
//       }, 500)
//     }
//   }

// export function addArticle(article: IArticle) {
//     const action: ArticleAction = {
//       type: actionTypes.ADD_ARTICLE,
//       article,
//     }
  
//     return simulateHttpRequest(action)
//   }
  
//   export function removeArticle(article: IArticle) {
//     const action: ArticleAction = {
//       type: actionTypes.REMOVE_ARTICLE,
//       article,
//     }
//     return simulateHttpRequest(action)
//   }
  
  