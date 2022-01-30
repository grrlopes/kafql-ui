import { Alert, AlertTitle, Stack } from "@mui/material";
import { useSelector } from "react-redux";

const QueryError = () => {
  const queryErr = useSelector((state) =>
    state.stream.filter((data) => data.queryerror !== "")
  );
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {JSON.stringify(queryErr)}
      </Alert>
    </Stack>
  );
};

export default QueryError;
