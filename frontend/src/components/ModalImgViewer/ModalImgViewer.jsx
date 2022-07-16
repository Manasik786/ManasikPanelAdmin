import React, { useState } from 'react';
import ImgsViewer from 'react-images-viewer';

const ModalImgViewer = ({ modalImgSet, open, handleClose }) => {
  const [currImg, setCurrImg] = useState(0);
  return (
    <div>
      <ImgsViewer
        imgs={modalImgSet}
        currImg={currImg}
        isOpen={open}
        onClose={handleClose}
        onClickPrev={() => setCurrImg(currImg - 1)}
        onClickNext={() => setCurrImg(currImg + 1)}
      />
    </div>
  );
};

export default ModalImgViewer;
