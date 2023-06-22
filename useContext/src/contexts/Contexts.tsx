import React, { createContext, useReducer } from 'react'
import { userInitialState, userType, userReducer } from '../reducers/userReducer'
import { themeInitialState, ThemeType, themeReducer } from '../reducers/themeReducer'
import { reducerActionType } from '../types/reducerActionType'

type initialStateType = {
    user: userType
    theme: ThemeType
}

type ContextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>
}

const initialState = {
    user: userInitialState,
    theme: themeInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action),
    theme: themeReducer(state.theme, action)
})

export const ContextProvider = ({ children }: React.PropsWithChildren) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}