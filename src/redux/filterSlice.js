import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState  = {
    status: "all",
};

export const filterSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {
        changeStatus: (state, action) => {
            state.status = action.payload
        },
    },
})

export const {changeStatus} = filterSlice.actions
export const filtersReducers = filterSlice.reducer