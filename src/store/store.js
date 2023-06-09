import { updateDisplayReducer } from "../reducers/displaySlice";
import { configureStore } from "@reduxjs/toolkit";
import { changeVolumeReducer } from "../reducers/volumeSlice";
import { toggleSwitchReducer } from "../reducers/switchSlice";

export const store = configureStore({
  reducer: {
    display: updateDisplayReducer,
    volume: changeVolumeReducer,
    switch: toggleSwitchReducer
  }
});