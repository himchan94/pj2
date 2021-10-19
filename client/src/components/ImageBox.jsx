import {
  Avatar,
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
} from "@material-ui/core";

import ImageShow from "./ImageShow.jsx";

import useStyles from "../css/useStyles.js";

const ImageBox = ({ files }) => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Paper className={classes.imagepage} elevation={10}>
        <ImageShow files={files} />
      </Paper>
    </div>
  );
};

export default ImageBox;
