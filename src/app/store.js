import { configureStore } from "@reduxjs/toolkit";
import {
  streamListSlice,
  streamAddSlice,
} from "../features/stream/streamSlice";

export const store = configureStore({
  reducer: {
    streamList: streamListSlice.reducer,
    streamAdd: streamAddSlice.reducer,
  },
});
