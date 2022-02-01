import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getTableListAsync = createAsyncThunk(
  "table/getTableListAsync",
  async () => {
    const response = await fetch("http://localhost:8088/ksql", {
      method: "POST",
      headers: {
        Accept: "application/vnd.ksql.v1+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ksql: "LIST TABLES;",
        streamsProperties: {},
      }),
    });
    if (response.ok) {
      const respTable = await response.json();
      return { respTable };
    }
  }
);

const addQueryTable = createAsyncThunk(
  "table/addQueryTable",
  async (payload) => {
    const response = await fetch("http://localhost:8088/ksql", {
      method: "POST",
      headers: {
        Accept: "application/vnd.ksql.v1+json",
        "Content-Type": "application/vnd.ksql.v1+json",
      },
      body: JSON.stringify({
        ksql: payload.querystream,
        streamsProperties: {
          "ksql.streams.auto.offset.reset": "earliest",
        },
      }),
    });
    if (response.ok) {
      const querytable = await response.json();
      return { querytable };
    }
    const querytable = await response.json();
    return { querytable };
  }
);

const tableListSlice = createSlice({
  name: "tableList",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getTableListAsync.pending]: (state, action) => {
      console.info("fetching data...");
    },
    [getTableListAsync.fulfilled]: (state, action) => {
      console.info("fetched data successfully!");
      return action.payload.respTable;
    },
  },
});

const tableAddSlice = createSlice({
  name: "tableAdd",
  initialState: [],
  reducers: {},
  extraReducers: {
    [addQueryTable.fulfilled]: (state, action) => {
      state.push(action.payload.querytable);
    },
  },
});

export { getTableListAsync, addQueryTable, tableListSlice, tableAddSlice };
