import { Alert, AlertTitle, Collapse, Stack } from "@mui/material";
import { useState } from "react";

const QueryError = (props) => {
  const [open, setOpen] = useState(true);

  return (
    <Stack sx={{ width: "100%" }} spacing={2} paddingBottom={1}>
      <Collapse in={open}>
        <Alert
          severity="error"
          onClose={() => {
            setOpen(false);
          }}
        >
          <AlertTitle>Error</AlertTitle>
          {props.error.message}
        </Alert>
      </Collapse>
    </Stack>
  );
};

export default QueryError;
