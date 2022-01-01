import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";

function ListSideBar() {
  const navigate = useNavigate();

  return (
    <Divider>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts", "ddd"].map((text, index) => (
          <ListItem button key={text} onClick={() => navigate(text)}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Divider>
  );
}

export default ListSideBar;
