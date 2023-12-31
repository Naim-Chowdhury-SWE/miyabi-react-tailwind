
import Modal from 'react-modal';

const ImageModal = ({ image, title, isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      className={`fixed top-0 left-0 right-0 bottom-0 bg-opacity-80 bg-black flex items-center justify-center z-50`}
      overlayClassName={`image-modal-overlay`}
    >
      <img
        src={image}
        alt={title}
        onClick={onRequestClose}
        className={`max-w-full max-h-full`}
      />
    </Modal>
  );
};

export default ImageModal;
