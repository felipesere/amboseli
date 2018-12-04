import React, { Component } from 'react'
import style from './modal.module.scss'
import ReactModal from 'react-modal'
import Helmet from 'react-helmet'
import { Separator } from '../components/separator'

let initialised

export const initModal = () => {
  if (initialised) {
    return
  } else {
    initialised = true
    ReactModal.setAppElement('#___gatsby')
  }
}

export class Modal extends Component {
  render() {
    let { onClose, day } = this.props
    return (
      <ReactModal
        className={style.modal}
        overlayClassName={style.overlay}
        isOpen={!!day}
        onRequestClose={onClose}
      >
        <Close onClick={onClose}/>
        {day && (<InnerModal title={day.frontmatter.title} html={day.html}/>)}
      </ReactModal>
    )
  }
}

const Close = ({ onClick }) => (
  <div onClick={onClick} className={style.close}>
    +
  </div>
)

const InnerModal = ({ title, html }) => {
  return (
    <React.Fragment>
      <TwitterCard title={title}/>
      <h1 className={style.modalTitle}>{title}</h1>
      <Separator/>
      <Entry html={html}/>
    </React.Fragment>
  )
}

const Entry = ({ html }) => {
  return (
    <div className={style.prose}>
      <div dangerouslySetInnerHTML={{ __html: html }}/>
    </div>
  )
}

const TwitterCard = ({ title }) => {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@felipesere"/>
      <meta name="twitter:title" content={title}/>
    </Helmet>
  )
}
