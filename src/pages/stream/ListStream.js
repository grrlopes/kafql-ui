import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStreamListAsync } from "../../features/stream/streamSlice";

const ListStream = () => {
  const dispatch = useDispatch();

  const streams = useSelector((state) => state.stream);

  useEffect(() => {
    dispatch(getStreamListAsync());
  }, [dispatch]);

  const data = streams.map((data, index) => {
    return {
      id: index,
      Name: data[index].name,
      Topic: data[index].topic,
      Type: data[index].type,
      valueFormat: data[index].valueFormat,
      isWindowed: data[index].isWindowed,
      keyFormat: data[index].keyFormat,
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
