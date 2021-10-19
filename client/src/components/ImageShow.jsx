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
          style={{ width: "100%", height: "100%" }}
          imageIds="none"
        />
      </div>
    );
  }
};

export default ImageShow;
