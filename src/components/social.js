import React from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from 'react-share'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './social.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faFacebookF,
  faRedditAlien,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { StaticQuery } from 'gatsby'

library.add(fas, faTwitter, faFacebookF, faRedditAlien, faLinkedinIn)

export const Social = ({ title, tags, slug }) => {
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
          <SocialIcons
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

const SocialIcons = ({ title, tags, twitter, url }) => {
  return (
    <div className={style.social}>
      <p className={style.share}>Share on</p>
      <div className={style.icons}>
        <TwitterShareButton
          url={url}
          className={style.twitter}
          title={title}
          via={twitter.split('@').join('')}
          hashtags={tags}
        >
          <span className={style.icon}>
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </span>
          <span className="text">Twitter</span>
        </TwitterShareButton>
        <FacebookShareButton url={url} className={style.facebook}>
          <span className={style.icon}>
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </span>
          <span className="text">Facebook</span>
        </FacebookShareButton>
        <LinkedinShareButton url={url} className={style.linkedin} title={title}>
          <span className={style.icon}>
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </span>
          <span className="text">LinkedIn</span>
        </LinkedinShareButton>
        <RedditShareButton url={url} className={style.reddit} title={title}>
          <span className={style.icon}>
            <FontAwesomeIcon icon={['fab', 'reddit-alien']} />
          </span>
          <span className="text">Reddit</span>
        </RedditShareButton>
      </div>
    </div>
  )
}
