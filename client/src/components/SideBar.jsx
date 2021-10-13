import { Grid } from "@material-ui/core";

import useStyles from "../css/useStyles.js";

const SideBar = () => {
  const classes = useStyles();
  return <div className={classes.sidebar}>사이드바</div>;
};

export default SideBar;
