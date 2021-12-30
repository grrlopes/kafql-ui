import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container>
      <Navbar />
    </Grid>
  );
}

export default App;
