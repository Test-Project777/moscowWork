import { Viewer } from '@react-pdf-viewer/core';
import React, { useState } from 'react';

export default function PdfViewer() {
  const [pdfFile, setPdfFile] = useState(null);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    setPdfFile(file);
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      {pdfFile && <Viewer fileUrl={URL.createObjectURL(pdfFile)} plugins={[defaultLayoutPlugin]} />}
    </div>
  );
}
