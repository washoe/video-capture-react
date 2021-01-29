import React from 'react';

// next
// resize
// downsample
// flip colours etc

export const Capture = ({ imgData }) => {
  const canvasRef = React.useRef(null);
  if (imgData) {
    const ctx = canvasRef.current?.getContext('2d');
    let l = imgData.data.length / 4;
    for (let i = 0; i < l; i++) {
      let r = imgData.data[i * 4 + 0];
      let g = imgData.data[i * 4 + 1];
      let b = imgData.data[i * 4 + 2];
      if (g > 100 && r > 100 && b < 43) {
        imgData.data[i * 4 + 3] = 0;
      }
    }
    ctx?.putImageData(imgData, 0, 0);
  }
  return (
    <article>
      <header>Captured image</header>
      {
        imgData && (
          <canvas ref={canvasRef} width={imgData.width} height={imgData.height}></canvas>
        )
      }
    </article>
  );
};

export default Capture;