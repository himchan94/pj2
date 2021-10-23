import { useEffect, useState } from "react";
import useStyles from "../css/useStyles.js";

import cornerstone from "cornerstone-core";
import cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import cornerstoneTools from "cornerstone-tools";

const ImageShow = ({ files }) => {
  let element;
  const classes = useStyles();

  // const loadAndViewImage = (imageId) => {
  //   const element = document.getElementById("dicomImage");
  //   cornerstone.loadImage(imageId).then(
  //     function (image) {
  //       console.log(image);
  //       const viewport = cornerstone.getDefaultViewportForImage(element, image);
  //       cornerstone.displayImage(element, image, viewport);
  //     },
  //     function (err) {
  //       alert(err);
  //     }
  //   );
  // };

  useEffect(() => {
    if (files.length !== 0) {
      element = document.getElementById("dicomImage");
      cornerstone.enable(element);

      const handleFileChange = (imgIds) => {
        // const convetedImg = files.map((file) => {
        //   return cornerstoneWADOImageLoader.wadouri.fileManager.add(file);
        // });
        // setImageIds([...imageIds, ...convetedImg]);

        const StackScrollMouseWheelTool =
          cornerstoneTools.StackScrollMouseWheelTool;

        const stack = {
          currentImageIdIndex: 0,
          imageIds: imgIds,
        };

        // console.log("이미지 아이디", imageIds);

        cornerstone.loadImage(imgIds[0]).then((image) => {
          cornerstone.displayImage(element, image);
          cornerstoneTools.addStackStateManager(element, ["stack"]);
          cornerstoneTools.addToolState(element, "stack", stack);
        });

        // setTimeout(() => {
        //   imageIds.forEach((imageId) => {
        //     const thumbnailElement = document.getElementById(imageId);
        //     cornerstone.enable(thumbnailElement);
        //     cornerstone.loadImage(imageId).then((image) => {
        //       cornerstone.displayImage(thumbnailElement, image);
        //       cornerstoneTools.addStackStateManager(element, ["stack"]);
        //       cornerstoneTools.addToolState(element, "stack", stack);
        //     });
        //   });
        // }, 1000);

        cornerstoneTools.addTool(StackScrollMouseWheelTool);
        cornerstoneTools.setToolActive("StackScrollMouseWheel", {});
      };

      handleFileChange(files);
    }
  }, [files]);

  const setZoomActive = (e) => {
    const ZoomMouseWheelTool = cornerstoneTools.ZoomMouseWheelTool;

    cornerstoneTools.addTool(ZoomMouseWheelTool);
    cornerstoneTools.setToolActive("ZoomMouseWheel", { mouseButtonMask: 1 });
    const PanTool = cornerstoneTools.PanTool;

    cornerstoneTools.addTool(PanTool);
    cornerstoneTools.setToolActive("Pan", { mouseButtonMask: 1 });
  };

  const setMouseWheelActive = (e) => {
    const StackScrollMouseWheelTool =
      cornerstoneTools.StackScrollMouseWheelTool;
    cornerstoneTools.addTool(StackScrollMouseWheelTool);
    cornerstoneTools.setToolActive("StackScrollMouseWheel", {});
  };

  const setLengthActive = (e) => {
    const LengthTool = cornerstoneTools.LengthTool;
    cornerstoneTools.addTool(LengthTool);
    cornerstoneTools.setToolActive("Length", { mouseButtonMask: 1 });
  };

  const setWwwcActive = (e) => {
    const WwwcTool = cornerstoneTools.WwwcTool;
    cornerstoneTools.addTool(WwwcTool);
    cornerstoneTools.setToolActive("Wwwc", { mouseButtonMask: 1 });
  };

  const setEraserActive = (e) => {
    const EraserTool = cornerstoneTools.EraserTool;
    cornerstoneTools.addTool(EraserTool);
    cornerstoneTools.setToolActive("Eraser", { mouseButtonMask: 1 });
  };

  if (files.length === 0) {
    return <h1>Upload your dicom image</h1>;
  } else {
    return (
      <div className={classes.dicomimg}>
        <button onClick={setZoomActive}>Zoom/Pan</button>
        <button onClick={setMouseWheelActive} style={{ marginLeft: "10px" }}>
          Scroll
        </button>
        <button onClick={setLengthActive} style={{ marginLeft: "10px" }}>
          Length
        </button>
        <button onClick={setWwwcActive} style={{ marginLeft: "10px" }}>
          WWWC
        </button>
        <button onClick={setEraserActive} style={{ marginLeft: "10px" }}>
          Eraser
        </button>
        <div
          id="dicomImage"
          style={{ width: "90%", height: "90%", margin: 0 }}
        ></div>
      </div>
    );
  }
};

export default ImageShow;
