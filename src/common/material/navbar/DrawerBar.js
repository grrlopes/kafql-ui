import { IconButton, useTheme, Drawer } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import HeadNavBar from "./HeadBar";
import ListSideBar from "./ListSideBar";

function Drawerbar(props) {
  const theme = useTheme();

  const handleDrawerClose = () => {
    props.onClick();
  };

  return (
    <Drawer
      sx={{
        width: props.drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: props.drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={props.open}
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
  );
}

export default Drawerbar;
