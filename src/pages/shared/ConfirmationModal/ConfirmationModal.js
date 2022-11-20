import React from 'react';

const ConfirmationModal = ({
  title,
  message,
  closeModal,
  modalData,
  successAction,
}) => {
  return (
    <>
      <input
        type="checkbox"
        id="doctor-confirmation-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={closeModal}
              htmlFor="doctor-confirmation-modal"
              className="btn"
            >
              Cencel
            </label>
            <label
              onClick={() => successAction(modalData)}
              className="btn btn-secondary"
            >
              Confirm
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;