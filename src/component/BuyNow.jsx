import React, { useState } from 'react';
import Modal from 'react-modal';

const BuyNow = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="h-screen px-5 text-right text-white bg-purple-500 secBuyNow ">
      <br/><br/>
      <h1 className="z-20 text-4xl font-bold mr-80 md:letters3">Ready to Buy?</h1>
      <p className="z-20 mt-4 text-lg mr-44 md:letters3">Browse our selection of party supplies and make your purchase today!</p>
      <button className="z-50 px-4 py-2 mt-8 mr-0 font-bold text-purple-500 bg-white rounded-lg shadow-md cursor-pointer hover:bg-purple-100 button letters3" onClick={openModal}>
        Shop Now
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2>This is not a site to really buy.</h2>
          <p>This is just a demo.</p>
          <button className="close-button" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BuyNow;
