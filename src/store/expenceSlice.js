import { createSlice } from "@reduxjs/toolkit";
const user = JSON.parse(localStorage.getItem("login"));
const tracker = JSON.parse(localStorage.getItem("tracker"));

export const expenceSlice = createSlice({
  name: "expence",
  initialState: {
    user: user,
    tracker: tracker || [],
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("login", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
    },
    addTracker: (state, action) => {
      const trackerDet = {
        ...action.payload,
        id: Math.random(),
      };
      state.tracker.push(trackerDet);
    },
    onEdit: (state, action) => {
      const update = action.payload;
      state.tracker = state.tracker.map((o) => o.id !== update);
      localStorage.setItem("tracker", JSON.stringify(state.tracker));
    },
    onDelete: (state, action) => {
      const deleteTracker = action.payload;
      state.tracker = state.tracker.filter((o) => o.id !== deleteTracker);
      localStorage.setItem("tracker", JSON.stringify(state.tracker));
    },
  },
});

export const { loginUser, logout, addTracker, onEdit, onDelete } =
  expenceSlice.actions;
export default expenceSlice.reducer;
