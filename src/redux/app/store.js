import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "../app/map/mapSlice";

const store = configureStore({
  reducer: {
    map: mapReducer,
  },
});

export default store;
