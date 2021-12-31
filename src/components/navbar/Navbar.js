import { useState } from "react";
import { IconButton, Box, useTheme, Drawer, CssBaseline } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Outlet } from "react-router-dom";

import Main from "../main/Main";
import TopBar from "../topbar/Topbar";
import HeadNavBar from "./HeadBar";
import ListSideBar from "./ListSideBar";
import TopToolBar from "../topbar/TopToolBar";

const drawerWidth = 200;

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <TopBar position="fixed" open={open} drawerwidth={200}>
        <TopToolBar onClick={handleDrawerOpen} open={open} />
      </TopBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <HeadNavBar>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </HeadNavBar>

        <ListSideBar />
      </Drawer>

      <Main open={open} drawerwidth={drawerWidth}>
        <HeadNavBar />
        <Outlet />
      </Main>
    </Box>
  );
}
