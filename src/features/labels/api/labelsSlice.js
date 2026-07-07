import { createSlice } from "@reduxjs/toolkit";
import { fetchLabels, createLabel } from "./labelsApi";

const labelsSlice = createSlice({
    name: "labels",

    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

        .addCase(fetchLabels.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchLabels.fulfilled, (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchLabels.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })

        .addCase(createLabel.fulfilled, (state, action) => {
            state.items.unshift(action.payload);
        })

    }
});
export default labelsSlice.reducer;