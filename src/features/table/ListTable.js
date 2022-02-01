import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTableListAsync } from "./tableSlice";

const ListTable = () => {
  const dispatch = useDispatch();

  const tables = useSelector((state) => state.tableList);
  useEffect(() => {
    dispatch(getTableListAsync());
  }, [dispatch]);

  const listTable = tables.map((data) => {
    return data.tables;
  });

  const data = listTable.map((data, index) => {
    return {
      id: index,
      Name: data.name,
      Topic: data.topic,
      Type: data.type,
      Format: data.format,
      isWindowed: data.isWindowed,
    };
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        columns={[
          { field: "Name" },
          { field: "Topic" },
          { field: "Type" },
          { field: "Format" },
          { field: "isWindowed" },
        ]}
        rows={data}
      />
    </div>
  );
};

export default ListTable;
