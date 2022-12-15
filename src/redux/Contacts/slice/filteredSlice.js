import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        getFilteredContacts: {
            reducer(state, { payload }) {
                return payload;
            },
        },
    },
});

export const { getFilteredContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
