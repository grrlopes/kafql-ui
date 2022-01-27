import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import streamReducer from "../features/stream/streamSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    stream: streamReducer,
  },
});
