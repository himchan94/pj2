import { useRef, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@material-ui/core";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import useStyles from "../css/useStyles.js";
import { ListItemButton } from "@mui/material";
import { styled } from "@mui/material/styles";

import cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";

import Scroll from "./Scroll";

const Input = styled("input")({
  display: "none",
});
const ImageAdd = ({ files, setFiles }) => {
  const fileInput = useRef();
  const classes = useStyles();

  const selectFile = (e) => {
    const before_converted = [...e.target.files];
    const converted = before_converted.map((file) => {
      return cornerstoneWADOImageLoader.wadouri.fileManager.add(file);
    });

    setFiles([...files, ...converted]);
  };

  return (
    <>
      <label htmlFor="contained-button-file">
        <List className={classes.sideComponnent}>
          <ListItem
            sx={{ bgcolor: "#F8F8FF", borderRadius: "10px" }}
            disablePadding
          >
            <ListItemButton>
              <Input
                accept="dicom/*"
                id="contained-button-file"
                multiple
                type="file"
                ref={fileInput}
                onChange={selectFile}
              />

              <ListItemIcon>
                <AddPhotoAlternateIcon fontSize="large" color="primary" />
              </ListItemIcon>
              <ListItemText primary="Add Image" />
            </ListItemButton>
          </ListItem>
        </List>
      </label>
      <Scroll type={"files"} files={files} />
    </>
  );
};

export default ImageAdd;
