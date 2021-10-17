import { Grid, Paper } from "@material-ui/core";
import ImageAdd from "./ImageAdd.jsx";

import useStyles from "../css/useStyles.js";
import LabelAdd from "./LabelAdd.jsx";
import Divider from "@mui/material/Divider";

const SideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <ImageAdd />
      <Divider />
      <LabelAdd />
    </div>
  );
};

export default SideBar;
