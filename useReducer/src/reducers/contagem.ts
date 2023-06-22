import { useReducer } from "react";

type reducerState = {
    count: number;
}

type reducerAction = {
    type: string;
}
const initialState = { count: 0 }

const reducer = (state: reducerState, action: reducerAction) => {
    switch (action.type) {
        case 'ADD':
            return { count: state.count + 1 };
        case 'DEL':
            return { count: state.count - 1 };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

export const useContagem = () => {
    return useReducer(reducer, initialState);
}