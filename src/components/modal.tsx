import React from 'react'
import ReactModal from 'react-modal'
import Helmet from 'react-helmet'
import { Separator } from './separator'
import styled from 'styled-components'

let initialised

export const initModal = () => {
  if (!initialised) {
    initialised = true
    ReactModal.setAppElement('#___gatsby')
  }
}

// TODO: Make this better!
type ModalProps = {
  onClose: () => void,
  day: any,
}

export class Modal extends React.Component<ModalProps> {
  render() {
    let { onClose, day } = this.props
    return (
      <StyledModal
        isOpen={!!day}
        onRequestClose={onClose}
      >
        <Close onClick={onClose} >+</Close>
        {day && <InnerModal title={day.frontmatter.title} html={day.html} />}
      </StyledModal>
    )
  }
}

function ReactModalAdapter ({className, overlayClassName, ...props }) {
  return (
    <ReactModal
      portalClassName={className}
      overlayClassName={overlayClassName}

      className={className}
      {...props}
    />
  )
}

const StyledModal = styled(ReactModalAdapter).attrs({
    overlayClassName: 'Overlay',
  })`
  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
  }
  
  border: 1px solid rgb(204, 204, 204);
  outline: none;
  border-radius: 5px;
  padding: 20px;
  width: 95%;
  margin: 5px auto;
  background: white;
  position: relative;
  max-height: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 800px) {
    max-width: 50%;
    min-width: 650px;
    max-height: 90%;
    margin-top: 2rem;
  }
`

// TODO: FS maybe move to the left?
const Close = styled.div`
  background-color: white;
  border-radius: 100%;
  border: 3px solid black;
  cursor:pointer;
  display: inline-block;
  font-size: 30px;
  font-weight: bold;
  height: 30px;
  line-height: 0;
  margin-right:-30px;
  margin-top:-30px;
  padding: 10px 0;
  position: absolute;
  text-align: center;
  transform: rotate(45deg);
  top: 40px;
  right: 40px;
  width: 30px;
`

const InnerModal = ({ title, html }) => {
  return (
    <>
      <TwitterCard title={title} />
      <ModalTitle>{title}</ModalTitle>
      <Separator />
      <Entry html={html} />
    </>
  )
}

const ModalTitle = styled.div`
  text-align: center;
  font-weight: lighter;
  font-style: italic;
`

const TwitterCard = ({ title }) => {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@felipesere" />
      <meta name="twitter:title" content={title} />
    </Helmet>
  )
}

const Entry = ({ html }) => {
  return (
    <Prose>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Prose>
  )
}

const Prose = styled.div`
  & * {
    font-size: 0.8rem;
  }

  li {
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 10px;
  }
`

