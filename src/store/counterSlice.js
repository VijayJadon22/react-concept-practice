import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: "Count",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        multiply: (state, action) => {
            state.value = state.value * action.payload;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
})

export const { increment, decrement, multiply, reset } = counterSlice.actions;
export default counterSlice.reducer;