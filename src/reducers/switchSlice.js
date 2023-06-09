import { createSlice } from "@reduxjs/toolkit";

const switchSlice = createSlice({
  name: "switch",
  initialState: {
    value: true
  },
  reducers: {
    toggleSwitch: (state) => {
      state.value = !state.value;
    }
  }
});

export const { toggleSwitch } = switchSlice.actions;
export const toggleSwitchReducer = switchSlice.reducer;

