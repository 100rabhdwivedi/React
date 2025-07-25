import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

export const counterReducer = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
        state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterReducer.actions

export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 500)
}

export default counterReducer.reducer