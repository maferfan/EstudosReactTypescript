import { reducerActionType } from "../types/reducerActionType"

export type userType = {
    name: string,
    age: number
}

export const userInitialState: userType = {
    name: "",
    age: 0
}

export const userReducer = (state: userType, action: reducerActionType) => {
    switch(action.type){
        case 'CHANGE_NAME':
            return {...state, name: action.payload.name}
        break
        case 'CHANGE_AGE':
            return {...state, age: action.payload.age}
        break
    }

    return state
}