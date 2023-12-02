import { configureStore } from "@reduxjs/toolkit";
import expenceReducer from "./expenceSlice";
const Store = configureStore({
  reducer: expenceReducer,
});
export default Store;
