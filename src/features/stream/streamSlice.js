import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getStreamListAsync = createAsyncThunk(
  "stream/getStreamListAsync",
  async () => {
    const response = await fetch("http://localhost:8088/ksql", {
      method: "POST",
      headers: {
        Accept: "application/vnd.ksql.v1+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ksql: "LIST STREAMS;",
        streamsProperties: {},
      }),
    });
    if (response.ok) {
      const respStream = await response.json();
      return { respStream };
    }
  }
);

const addQueryStream = createAsyncThunk(
  "stream/addQueryStream",
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
      const querystreams = await response.json();
      return { querystreams };
    }
    const querystream = await response.json();
    return { querystream };
  }
);

const streamListSlice = createSlice({
  name: "streamList",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getStreamListAsync.pending]: (state, action) => {
      console.info("fetching data...");
    },
    [getStreamListAsync.fulfilled]: (state, action) => {
      console.info("fetched data successfully!");
      return action.payload.respStream;
    },
  },
});

const streamAddSlice = createSlice({
  name: "streamAdd",
  initialState: [],
  reducers: {},
  extraReducers: {
    [addQueryStream.fulfilled]: (state, action) => {
      state.push(action.payload.querystream);
    },
  },
});

export { getStreamListAsync, addQueryStream, streamListSlice, streamAddSlice };
