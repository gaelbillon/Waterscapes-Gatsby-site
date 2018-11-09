import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
`
const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  min-height: 300px;
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`
const TitlesWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  text-align: center;
  

  color: white;
`

const Title = styled.h1`
  // padding: 0 1rem;
  font-size: 3em;
  // text-transform: capitalize;
  text-transform: uppercase;
  font-weight: 600;
`
const SubTitle = styled(Title)`
  font-size: 2em;
  text-transform: capitalize;
  // text-transform: lowercase;
  // &:first-letter {
  //   text-transform: capitalize;
  // }
  // top: 65%;
`

const Hero = props => (
  <Wrapper>
    
    <BgImg
      height={props.height}
      fluid={props.image.fluid}
      // fadeIn={false}
    />

    <TitlesWrapper>
      <Title>{props.title}</Title>
      <SubTitle>{props.area}, {props.country}</SubTitle>
    </TitlesWrapper>

  </Wrapper>
)

export default Hero
