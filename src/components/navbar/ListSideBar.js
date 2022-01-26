import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import SatelliteIcon from "@mui/icons-material/SatelliteAltTwoTone";
import TableViewRoundedIcon from "@mui/icons-material/TableViewRounded";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import { useNavigate } from "react-router-dom";

const IconList = (text) => {
  switch (text) {
    case "Table":
      return <TableViewRoundedIcon />;
    case "Stream":
      return <SatelliteIcon />;
    default:
      <QuestionMarkRoundedIcon />;
      break;
  }
};

const ListSideBar = () => {
  const navigate = useNavigate();

  return (
    <List>
      {["Table", "Stream"].map((text, index) => (
        <ListItem button key={text} onClick={() => navigate(text)}>
          <ListItemIcon sx={{ minWidth: 44 }}> {IconList(text)} </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
}

export default ListSideBar;
