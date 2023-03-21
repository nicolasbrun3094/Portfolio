import React from "react";
import "./downloadBtn.css";
import cv from "../../assets/images/dev_webCV.pdf";

const DownloadBtn = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "cv_brun_nicolas.pdf";
    link.click();
  };

  return (
    <div className="download-btn-container">
      <button className="download-btn" onClick={handleDownload}>
        Download CV
      </button>
    </div>
  );
};

export default DownloadBtn;
