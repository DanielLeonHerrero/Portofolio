import React, { useState } from 'react';
import ModalContext from './modalContext';
import Modal from '../../components/modal/modal';

const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [child, setChild] = useState(null);

    const openModal = (child) => {
        setChild(child);
        setIsOpen(true);
    }
    const closeModal = () => setIsOpen(false);
  
    return (
      <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
        {children}
        {isOpen && <Modal>{child}</Modal>}
      </ModalContext.Provider>
    );
}

export default ModalProvider;