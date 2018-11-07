import React from 'react'
import styled from 'styled-components'
require('prismjs/themes/prism.css')

const Links = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};

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
const LinksTitle = styled.div`
  font-weight: bold;
  margin-bottom: 1em;
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
