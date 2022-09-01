import React from 'react'
import './Modal.css'
import close from '../images/icon-close.svg';
import rules from '../images/image-rules.svg'
const Modal = ({setOpenModal, openModal}) => {
  return (
    <div className="modalHolder">
        <div className='modal'>
        <div className="modalHead">
            <h4>Rules</h4>
            <img src={close} alt="" onClick={() => setOpenModal(!openModal)}/>
        </div>
        <div className='rules'>
            <img src={rules} alt="rule" />
        </div>
    </div>
    </div>
  )
}

export default Modal