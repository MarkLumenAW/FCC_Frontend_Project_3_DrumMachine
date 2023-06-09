import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
  name: "display",
  initialState: {
    value:"SWITCH OFF"
  },
  reducers: {
    updateDisplay: (state, action) => {
      state.value = action.payload.value;
    }
  }
})

export const { updateDisplay } = displaySlice.actions;
export const updateDisplayReducer = displaySlice.reducer;