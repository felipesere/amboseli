import * as React from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from 'react-share'
import styled from 'styled-components'

import { graphql, StaticQuery } from 'gatsby'
import {
  ColoredFacebook,
  ColoredLinkedIn,
  ColoredReddit,
  ColoredTwitter,
  Icons,
} from './social'

export const Share = ({ title, tags, slug }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              description
              siteUrl
              twitterHandle
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: { siteUrl, twitterHandle },
        },
      }) => {
        return (
          <ShareIcons
            title={title}
            tags={tags}
            twitter={twitterHandle}
            url={`${siteUrl}${slug}`}
          />
        )
      }}
    />
  )
}

const ShareIcons = ({ title, tags, twitter, url }) => {
  return (
    <Social>
      <ShareOn>Share on</ShareOn>
      <Icons>
        <TwitterShareButton
          url={url}
          title={title}
          via={twitter.split('@').join('')}
          hashtags={tags}
        >
          <ColoredTwitter />
        </TwitterShareButton>
        <FacebookShareButton url={url}>
          <ColoredFacebook />
        </FacebookShareButton>
        <LinkedinShareButton url={url} title={title}>
          <ColoredLinkedIn />
        </LinkedinShareButton>
        <RedditShareButton url={url} title={title}>
          <ColoredReddit />
        </RedditShareButton>
        {}
      </Icons>
    </Social>
  )
}

const Social = styled.div`
  margin-bottom: 2em;
`

const ShareOn = styled.p`
  white-space: nowrap;
  margin-right: 1em;

  @media (min-width: 800px) {
    float: left;
  }
`
