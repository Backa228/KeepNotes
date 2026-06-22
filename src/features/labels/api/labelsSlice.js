import { createSlice } from "@reduxjs/toolkit"
import { fetchLabels, createLabel } from "./labelsApi"

const labelsSlice = createSlice({
    name: "labels",

    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducer: {},
    extraRducers: (builder) => {
        builder

        .addCase(fetchLabels.pending, (state) => {
            state.isLoading = true
        })

        .addCase(fetchLabels.pending, (state) => {
            state.items = action.payload
            state.isLoading = false
        })

        .addCase(fetchLabels.pending, (state) => {
            state.isLoading = false
            state.error = action.payload
        })

        .addCase(createLabel.fulfilled, (state, action) => {
            state.items.onshift(action.payload)
        })
    }
})

export default labelsSlice.reducer