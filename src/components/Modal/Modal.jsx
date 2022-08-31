import React, { useState } from "react";

const Modal = () => {
  const [modal, setmodal] = useState("");

  const toogle = () => {
    setmodal(!modal);
  };
  return (
    <div className="modal-container">
      <button onClick={toogle()}>RULES</button>
      {modal && (
        <div>
          <div className="modal-head">
            <h2>Rules</h2>
            <img src="../images/icon-close.svg" alt="" />
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Modal;
