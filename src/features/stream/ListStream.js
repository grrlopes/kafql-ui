import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStreamListAsync } from "./streamSlice";

const ListStream = () => {
  const dispatch = useDispatch();

  const streams = useSelector((state) => state.streamList);
  useEffect(() => {
    dispatch(getStreamListAsync());
  }, [dispatch]);

  const listStrem = streams.map((data) => {
    return data.streams[0];
  });

  const data = listStrem.map((data, index) => {
    return {
      id: index,
      Name: data.name,
      Topic: data.topic,
      Type: data.type,
      valueFormat: data.valueFormat,
      isWindowed: data.isWindowed,
      keyFormat: data.keyFormat,
    };
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        columns={[
          { field: "Name" },
          { field: "Topic" },
          { field: "Type" },
          { field: "valueFormat" },
          { field: "isWindowed" },
          { field: "keyFormat" },
        ]}
        rows={data}
      />
    </div>
  );
};

export default ListStream;
