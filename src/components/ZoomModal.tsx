// src/components/ZoomModal.tsx
import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface ZoomModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageSrc: string;
  altText: string;
}

const ZoomModal: React.FC<ZoomModalProps> = ({ isOpen, onRequestClose, imageSrc, altText }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      className="bg-white p-4 rounded shadow max-w-3xl w-full mx-4 outline-none"
    >
      <img src={imageSrc} alt={altText} className="max-h-[80vh] w-auto mx-auto rounded" />
    </Modal>
  );
};

export default ZoomModal;
