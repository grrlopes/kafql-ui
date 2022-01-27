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
      const streams = await response.json();
      const resp = streams.map((data) => {
        if (data.streams.length) {
          return data.streams;
        }
        return data.streams;
      });
      return resp;
    }
  }
);

const streamSlice = createSlice({
  name: "stream",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getStreamListAsync.pending]: (state, action) => {
      console.info("fetching data...");
    },
    [getStreamListAsync.fulfilled]: (state, action) => {
      console.info("fetched data successfully!", action.payload);
      return action.payload;
    },
  },
});

export { getStreamListAsync };

export default streamSlice.reducer;
