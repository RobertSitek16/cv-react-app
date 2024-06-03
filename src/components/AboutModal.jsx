import { useState } from 'react';
import '../styles/AboutModal.css';

function AboutModal({ isOpen, onClose, onSave, value }) {
  const [tempDescription, setTempDescription] = useState(value);

  const handleSaveClick = () => {
    onSave(tempDescription);
    onClose();
  };

  const handleCancelClick = () => {
    setTempDescription(value);
    onClose();
  };

  const handleDescriptionChange = (event) => {
    setTempDescription(event.target.value);
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className='modal-content'>
        <span className='close' onClick={onClose}>&times;</span>
        <h2>Edit Description</h2>
        <textarea
          value={tempDescription}
          onChange={handleDescriptionChange}
          className='description-textarea'
        />
        <div className='button-container'>
          <button onClick={handleSaveClick} className='save-button'>Save</button>
          <button onClick={handleCancelClick} className='cancel-button'>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AboutModal;
