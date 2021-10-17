import { Input, Button } from "@material-ui/core";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@material-ui/core";
import AddBoxIcon from "@mui/icons-material/AddBox";

import useStyles from "../css/useStyles.js";
import { ListItemButton } from "@mui/material";

import Scroll from "./Scroll";
const LabelAdd = () => {
  const classes = useStyles();

  return (
    <List>
      <ListItem className={classes.sideComponnent} disablePadding>
        <ListItemButton sx={{ bgcolor: "#F8F8FF", borderRadius: "10px" }}>
          <ListItemIcon>
            <AddBoxIcon fontSize="large" color="primary" />
          </ListItemIcon>

          <ListItemText primary="Add Label"></ListItemText>
        </ListItemButton>
      </ListItem>
      <Scroll />
    </List>
  );
};

export default LabelAdd;
