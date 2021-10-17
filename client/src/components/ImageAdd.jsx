import { Input, Button } from "@material-ui/core";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@material-ui/core";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import useStyles from "../css/useStyles.js";
import { ListItemButton } from "@mui/material";

import Scroll from "./Scroll";
const ImageAdd = () => {
  const classes = useStyles();

  return (
    <List className={classes.sideComponnent}>
      <ListItem
        sx={{ bgcolor: "#F8F8FF", borderRadius: "10px" }}
        disablePadding
      >
        <ListItemButton>
          <ListItemIcon>
            <AddPhotoAlternateIcon fontSize="large" color="primary" />
          </ListItemIcon>
          <ListItemText primary="Add Image"></ListItemText>
        </ListItemButton>
      </ListItem>
      <Scroll />
    </List>
  );
};

export default ImageAdd;
