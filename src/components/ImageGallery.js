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
  // max-height:100vh;
  // overflow: scroll;
  width: 86%;
  margin: 0 7% 0 7%;
`
const GalleryItem = styled(Img)`
    // border-bottom: 1em solid #fff;
    // outline: 1px solid #000;

    margin-top: 1vw;
  // position: relative;
  // border: 1px solid ${props => props.theme.colors.secondary};
  // border-radius: 2px;
  // width: 100%;
  // transition: background 0.2s;
  // max-height: 40vh;
  max-height: 20em;
    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    // flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
    // margin-top: 2vw;
    // border: 3px solid orange;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    // flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin-top: 4vw;
    // border: 3px solid red;
  }

  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
`

const Figure = styled.figure`
  background-color: #fbfbfb;
`

const FigCaption = styled.figcaption`
  text-align: center;
  font-size: 0.7em;
  // font-size: ${props => props.theme.fonts.article.fontSize};
  letter-spacing: -0.06em;
  word-wrap: break-word;
  font-family: ${props => props.theme.fonts.sansSerif.fontFamily};
  font-weight: 200;
  padding: 0.2em;
  padding-bottom: 0.4em;
`



const ImageGallery = props => (
    <List>
        {props.images.map(image => (
      <Figure key={image.id}>
          <a href={image.file.url}>
            <GalleryItem
                // key={image.id}
                fluid={image.fluid}
                height={image.width}
                width={image.height}
            />
          </a>  
        <FigCaption>{image.title}. {image.description}</FigCaption>
          </Figure>
    ))}
  </List>
)

export default ImageGallery
