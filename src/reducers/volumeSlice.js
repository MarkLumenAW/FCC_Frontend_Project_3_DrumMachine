import { createSlice } from "@reduxjs/toolkit";

const volumeSlice = createSlice({
  name: "volume",
  initialState: {
    value:0.5
  },
  reducers: {
    changeVolume: (state, action) => {
      state.value = action.payload.value;
    }
  }
})

export const { changeVolume } = volumeSlice.actions;
export const changeVolumeReducer = volumeSlice.reducer;

