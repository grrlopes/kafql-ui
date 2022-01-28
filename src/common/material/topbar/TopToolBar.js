import { IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function TopToolBar(props) {
  const handleDrawerOpen = () => {
    props.onClick();
  };

  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 2, ...(props.open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Sleep and death are sister and brother = {`${props.open}`}
      </Typography>
    </Toolbar>
  );
}

export default TopToolBar;
