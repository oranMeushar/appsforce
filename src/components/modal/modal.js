import React from 'react';
import {ModalContainer, ModalChildren} from './modal.style';

const Modal = ({children, isModal, setIsModal}) => {

    const handleModalClicked = () =>{
        setIsModal(false); 
    }

    return (
        <ModalContainer isModal={isModal} onClick={handleModalClicked}>
            <ModalChildren onClick={(e) => e.stopPropagation()}>
                {children}
            </ModalChildren>
        </ModalContainer>
    );
};

export default Modal;



