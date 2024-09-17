import { useContext } from 'react';
import ModalContext from '../modalContext';

const useModal = () => {
    return useContext(ModalContext);
}

export default useModal;