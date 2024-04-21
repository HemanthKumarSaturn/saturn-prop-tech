import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start: [13.1155, 77.607],
  end: [13.025, 77.534],
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setStart: (state, action) => {
      state.start = action.payload;
    },
    setEnd: (action) => {
      state.end = action.payload;
    },
  },
});

export default mapSlice.reducer;
export const { setEnd, setStart } = mapSlice.actions;
