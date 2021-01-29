import React from 'react';
import Webcam from 'react-webcam';

import Capture from './Capture';

const App = () => {

  const webcamRef = React.useRef(null);
  const [imgData, setImgData] = React.useState(null);
  // does not work on first hit! why?
  const capture = React.useCallback(() => {
    webcamRef.current.getScreenshot();

    setImgData(webcamRef.current.ctx.getImageData(0, 0, webcamRef.current.canvas.width, webcamRef.current.canvas.height));
  }, [webcamRef, imgData]);
  return (
    <div className="App">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture photo</button>
      <Capture imgData={imgData}></Capture>
    </div>
  );
}

export default App;
