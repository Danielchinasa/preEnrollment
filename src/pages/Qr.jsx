import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import Nav from "../components/Nav";

const Qr = () => {
  const onImageCownload = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    console.log("THIS IS THE USER ID",userId);
  }, [])

  return (
    <div>
      <Nav />
      <div class="row">
        <div className="col-md-12">
          <center className="mt-3">
            <QRCode id="QRCode" value={localStorage.getItem("userId")} />
          </center>
        </div>
        <div className="col-md-12">
          <center className="mt-3">
            <button
              className="btn btn-success"
              type="button"
              onClick={onImageCownload}
            >
              Download QR Image
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Qr;
