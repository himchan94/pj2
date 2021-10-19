import { useRef, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@material-ui/core";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import useStyles from "../css/useStyles.js";
import { ListItemButton } from "@mui/material";
import { styled } from "@mui/material/styles";

import Scroll from "./Scroll";

const Input = styled("input")({
  display: "none",
});
const ImageAdd = ({ files, setFiles }) => {
  const fileInput = useRef();
  const classes = useStyles();

  const selectFile = (e) => {
    // e.target은 input이죠!
    // input이 가진 files 객체를 살펴봅시다.
    console.log(e.target.files);
    // 선택한 파일이 어떻게 저장되어 있나 봅시다.
    // console.log(e.target.files[0]);

    // ref로도 확인해봅시다. :)
    // console.log(fileInput.current.files[0]);
    setFiles([...files, ...e.target.files]);
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
