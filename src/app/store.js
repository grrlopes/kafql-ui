import { configureStore } from "@reduxjs/toolkit";
import {
  streamListSlice,
  streamAddSlice,
} from "../features/stream/streamSlice";
import { tableListSlice } from "../features/table/tableSlice";

export const store = configureStore({
  reducer: {
    streamList: streamListSlice.reducer,
    streamAdd: streamAddSlice.reducer,
    tableList: tableListSlice.reducer,
  },
});
