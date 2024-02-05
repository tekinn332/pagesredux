import informationReducer from "./informationSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    infReducer: informationReducer,
  },
});

export default store;
