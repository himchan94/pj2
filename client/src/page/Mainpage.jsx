import ImageBox from "../components/ImageBox";
import SideBar from "../components/SideBar";

import useStyles from "../css/useStyles.js";

import { Grid, Container } from "@material-ui/core";

const Mainpage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SideBar />
      <ImageBox />
    </div>
  );
};

export default Mainpage;
