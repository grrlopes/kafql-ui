import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";

import Content from "../content/Content";
import TopBar from "../topbar/Topbar";
import HeadNavBar from "../navbar/HeadBar";
import TopToolBar from "../topbar/TopToolBar";
import Drawerbar from "../navbar/DrawerBar";

const drawerWidth = 200;

export default function Main() {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        boxShadow: 1,
        borderRadius: 2,
      }}
    >
      <CssBaseline />

      <TopBar position="fixed" open={open} drawerwidth={200}>
        <TopToolBar onClick={handleDrawerOpen} open={open} />
      </TopBar>

      <Drawerbar
        onClick={handleDrawerClose}
        open={open}
        drawerWidth={drawerWidth}
      />

      <Content open={open} drawerwidth={drawerWidth}>
        <HeadNavBar />
        <Outlet />
      </Content>
    </Box>
  );
}
