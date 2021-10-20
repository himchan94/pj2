import { useEffect } from "react";
import useStyles from "../css/useStyles.js";

import CornerstoneViewport from "react-cornerstone-viewport";

const ImageShow = ({ files }) => {
  const classes = useStyles();

  useEffect(() => {});

  if (files.length === 0) {
    return <h1>Upload your dicom image</h1>;
  } else {
    return (
      <div className={classes.dicomimg}>
        <CornerstoneViewport
          style={{ width: "90%", height: "90%", margin: 0 }}
          imageIds="none"
        />
      </div>
    );
  }
};

export default ImageShow;
