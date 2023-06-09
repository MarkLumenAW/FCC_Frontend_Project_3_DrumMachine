import { createSlice } from "@reduxjs/toolkit";

const volumeSlice = createSlice({
  name: "volume",
  initialState: {
    value:" "
  },
  reducers: {
    changeVolume: (state, action) => {
      state.value = action.payload.value;
    }
  }
})

export const { changeVolume } = volumeSlice.actions;
export const changeVolumeReducer = volumeSlice.reducer;

