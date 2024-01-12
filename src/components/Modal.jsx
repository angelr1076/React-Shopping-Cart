import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '../styles/Modal.css';

function Modal({ title, message, handleCloseModal, handleConfirmCheckout }) {
  const [isConfirming, setIsConfirming] = useState(false);

  useEffect(() => {
    if (isConfirming) {
      setTimeout(() => {
        handleConfirmCheckout();
        handleCloseModal();
      }, 1500);
    }
  }, [isConfirming, handleConfirmCheckout, handleCloseModal]);

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h3>{title}</h3>
        <p>{message}</p>
        {!isConfirming && (
          <div className='button-container'>
            <button className='cancel-checkout btn' onClick={handleCloseModal}>
              Cancel
            </button>
            <button
              className='confirm-checkout btn'
              onClick={() => setIsConfirming(true)}>
              Confirm
            </button>
          </div>
        )}
        {isConfirming && <p>Processing...</p>}
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleConfirmCheckout: PropTypes.func.isRequired,
};

export default Modal;
