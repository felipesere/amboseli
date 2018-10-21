import React from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from 'react-share'
import style from './social.module.scss'

import { graphql, StaticQuery } from 'gatsby'
import { Facebook, Icons, LinkedIn, Reddit, Twitter } from './share/social'

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
            tag={tags}
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
    <div className={style.social}>
      <p className={style.share}>Share on</p>
      <Icons>
        <TwitterShareButton
          url={url}
          title={title}
          via={twitter.split('@').join('')}
          hashtags={tags}
        >
          <Twitter />
        </TwitterShareButton>
        <FacebookShareButton url={url}>
          <Facebook/>
        </FacebookShareButton>
        <LinkedinShareButton url={url} title={title}>
          <LinkedIn/>
        </LinkedinShareButton>
        <RedditShareButton url={url} title={title}>
          <Reddit />
        </RedditShareButton>{}
      </Icons>
    </div>
  )
}
