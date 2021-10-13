import { useEffect } from "react";

const ImageShow = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    const img = new Image();
    img.src = "https://thiscatdoesnotexist.com/";

    img.onload = function () {
      context.drawImage(img, 0, 0);
    };
  });

  return <canvas id="canvas" width="700px" height="700px"></canvas>;
};

export default ImageShow;
