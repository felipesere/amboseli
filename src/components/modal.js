import React from 'react'
import style from './modal.module.scss'
import ReactModal from 'react-modal'

let initialised

export const initModal = () => {
  if (initialised) {
    return
  } else {
    initialised = true
    ReactModal.setAppElement('#___gatsby')
  }
}

export const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal
      className={style.modal}
      overlayClassName={style.overlay}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <Close onClick={onClose} />
      {children}
    </ReactModal>
  )
}

const Close = ({ onClick }) => (
  <div onClick={onClick} className={style.close}>
    +
  </div>
)
