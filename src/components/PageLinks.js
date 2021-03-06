import React from 'react'
import styled from 'styled-components'
require('prismjs/themes/prism.css')

const Links = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  font-size: ${props => props.theme.fonts.article.fontSize};
  letter-spacing: ${props => props.theme.fonts.article.letterSpacing};
  font-family: ${props => props.theme.fonts.article.fontFamily};
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }

  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }
`
const LinksTitle = styled.h2`
  // font-weight: bold;
  margin-bottom: 1em;
  font-family: ${props => props.theme.fonts.article.fontFamily};
  font-weight: 400;
  line-height: 1.25;
  margin: 0 0 0.5rem 0;
  text-transform: capitalize;
  font-size: 1.35em;
`

const PageLinks = props => {
    return (
    <div>
    <LinksTitle>Links</LinksTitle>
    <Links
      dangerouslySetInnerHTML={{ __html: props.links.childMarkdownRemark.html }}
        />
    </div >  
  )
}

export default PageLinks
