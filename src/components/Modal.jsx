import React, { useState } from "react";
import Contact from "./Contact";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <button onClick={toggleModal}>Contact Us</button>
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <Contact />
              <button className="close-modal text-black" onClick={toggleModal}>
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
