import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import useModal from '../../context/modalContext/hook/useModal'
import Button from '../button/buton'
import CloseIcon from '../svg/close'


const Modal = (props) => {

    const { children } = props
    const { closeModal } = useModal();
    const modalRef = React.createRef();

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    const handlerClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    }

    return (
        <div className='fixed p-3 inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 sm:p-0' onClick={handlerClickOutside}>
            <div ref={modalRef} className='relative bg-white dark:bg-gray-900 dark:text-white'>
                {children}
                <div className='absolute top-0 right-0'>
                    <Button variant='modal-close' svg={<CloseIcon />} onClick={closeModal} />
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.node
}

export default Modal