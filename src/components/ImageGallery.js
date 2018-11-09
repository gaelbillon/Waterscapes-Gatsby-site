import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const List = styled.ul`
    // max-width:  50%;
    // float: right;
  display: block;
//   flex-flow: row wrap;
//   justify-content: space-between;
//   margin: 0 auto;
//   &::after {
//     content: '';
//     flex: 0 0 32%;
//   }
`
const GalleryItem = styled(Img)`
    // border-bottom: 1em solid #fff;
    // outline: 1px solid #000;
    // width: 80%;
    // margin: auto;
    // margin-bottom: 1em;
  position: relative;
  // border: 1px solid ${props => props.theme.colors.secondary};
  // border-radius: 2px;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    // color: #373f49;
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`

const ImageGallery = props => (
    <List>
        {props.images.map(image => (
            <GalleryItem
                key={image.id}
                fluid={image.fluid}
                height={image.width}
                width={image.height}
                caption={image.title}    
            />
    ))}
  </List>
)

export default ImageGallery
