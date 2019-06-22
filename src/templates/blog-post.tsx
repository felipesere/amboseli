import * as React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import icon from '../assets/favicon.png'
import { NavBar } from '../components/navigation'
import { Tags } from '../components/tags'
import { Share } from '../components/share'
import styled from 'styled-components'
import { colors } from '../styles'

type Post = {
  frontmatter: {
    tags?: string[],
    title: string,
    date: string,
  },
  excerpt: string,
  html: string,
  fields: {
    slug: string,
  }
}

type BlogPostTemplateProps = {
  data: {
    markdownRemark: Post,
  },
  pageContext: {
    previous: string,
    next: string,
  },
}

class BlogPostTemplate extends React.Component<BlogPostTemplateProps> {
  render() {
    const post = this.props.data.markdownRemark
    const tags = post.frontmatter.tags || []
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    const title = get(post, 'frontmatter.title')

    return (
      <React.Fragment>
        <NavBar />
        <Main>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: siteDescription }]}
            title={`${title} | ${siteTitle}`}
            link={[{ rel: 'shortcut icon', type: 'image/png', href: icon }]}
          />
          <article>
            <Title>{title}</Title>
            <Metadata>
              <Date>{post.frontmatter.date}</Date>
              <Tags tags={tags} blue/>
            </Metadata>

            <div dangerouslySetInnerHTML={{ __html: post.html }}/>

            <hr/>
          </article>

          <Share title={title} tags={tags} slug={post.fields.slug}/>
          <Navigation previous={previous} next={next}/>
        </Main>
      </React.Fragment>
    )
  }
}

const Date = styled.span`
  font-size: 0.75rem;
`

const Metadata = styled.div`
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.15rem;
`

const Main = styled.main`
  width: 90%;
  margin: 1rem auto;

  @media (min-width: 800px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 700px;
  }

  h2 {
    margin-top: 2rem;
    margin-bottom: .5rem;
  }

  h3 {
    margin-top: 2rem;
    margin-bottom: .5rem;
  }
`

/*
const StyledLink= styled(({ primary, ...props }) => <Link {...props} />)`
  color: ${props => props.primary ? 'blue' : 'red'}
`
*/

const NavigationButton = styled(({ previous, next, ...props }) => <Link {...props} />)`
  float: ${({ next, previous }) => next ? 'left' : previous ? 'right' : 'inherit'};
  color: ${colors.darkerGraphite};
  border: 1px solid ${colors.graphite};
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 3px;
  font-size: 0.6rem;

  svg {
    vertical-align: middle;
    margin-left: 5px;
    margin-right: 5px;
    transform: translateY(-2px);
  }

  &:hover {
    background: ${colors.lightGrey};
  }
`

const Navigation = ({ previous, next }) => {
  return (
    <NavigationButtons>
      {next && (
        <NavigationButton next
                          to={next.fields.slug}
                          rel="prev"
        >
          <FaAngleLeft/>
          <span>NEWER POSTS</span>
        </NavigationButton>
      )}
      {previous && (
        <NavigationButton previous
                          to={previous.fields.slug}
                          rel="next"
        >
          <span>OLDER POSTS</span>
          <FaAngleRight/>
        </NavigationButton>
      )}
    </NavigationButtons>
  )
}

const NavigationButtons = styled.ul`
  margin: 0 0 5rem;

  li {
    list-style: none;
  }
`

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      fields {
        slug
      }
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
