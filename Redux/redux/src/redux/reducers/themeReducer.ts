import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'light'
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})

export const { setTheme } = slice.actions
export default slice.reducer