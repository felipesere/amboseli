import React from 'react'
import classnames from 'classnames'
import style from './advent.module.scss'
import ReactModal from 'react-modal'
import { graphql } from 'gatsby'
import { PromoLayout }     from '../components/promo-layout'
import { Title, Subtitle } from '../components/title'
import { Day }             from '../components/calendar-day'

const AdventCalendar = (props) => {
  const {
    data: {
      allMarkdownRemark: { edges: days },
    },
  } = props
  return (
    <PromoLayout
      title={'Advent of Coder'}
      top={
        <div className={style.adventTop}>
          <Title>
            Advent of <strong>Code</strong>
          </Title>
          <Subtitle>
            Small nuggets worth looking at running up to Christmas.
          </Subtitle>
        </div>
      }
      bottom={days.map(({ node: { excerpt: excerpt, frontmatter: f, html: html } }) => (
        <AdventDay key={f.date} date={f.date} title={f.title} >
          <div dangerouslySetInnerHTML={{__html: html}} />
        </AdventDay>
      ))}
    />
  )
}

class AdventDay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
    }
  }

  toggleModal = (e) => {
    console.log('toggling')
    this.setState((prevState) => {
      return { modalOpen: !prevState.modalOpen }
    })
  }

  render() {
    const { date, title, children } = this.props
    return (
      <React.Fragment>
        <Modal isOpen={this.state.modalOpen} onClose={this.toggleModal}>
          {children}
        </Modal>
        <article className={style.adventDay} onClick={this.toggleModal}>
          <Day datetime={date} />
          <section className={style.main}>
            <div className={style.title} >
            {title}
            </div>
          </section>
        </article>
      </React.Fragment>
    )
  }
}

ReactModal.setAppElement('#___gatsby')

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal
      className={style.modal}
      overlayClassName={style.overlay}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      {children}
    </ReactModal>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/advent/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          html
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`

export default AdventCalendar
