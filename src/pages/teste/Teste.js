import React from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

const Inbox = () => {
  const buttonStyles = {
    fontSize: "0.875rem",
    fontWeight: 600,
    textTransform: "capitalize",
    borderRadius: 2.5,
    "&.MuiButton-contained": {
      backgroundColor: "#009be5",
      "&:hover": {
        backgroundColor: "#006db3",
      },
    },
    "&.MuiButton-outlined": {
      color: "#fff",
      borderColor: "#fff",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  };

  return (
    <Grid item xs={8}>
      This is test page bro!
      <Button sx={buttonStyles} variant="contained">
        Add user
      </Button>
      <Button sx={buttonStyles} variant="outlined">
        Add user
      </Button>
    </Grid>
  );
};

export default Inbox;
