import React from 'react'
import styled from 'styled-components'
import config from '../utils/siteConfig'


const TitlesWrapper = styled.div`
  text-align: center;
//   margin-bottom: 4em;
  margin-bottom: 7vw;
`

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.article.fontFamily};
  font-size: 12vw;
`
const SubTitle = styled.h2`
  font-size: calc(0.7em + 1.4vw);
  text-transform: none;
  letter-spacing:   -0.01em;
`

const HomePageHero = props => (

    <TitlesWrapper>
        <Title>{config.siteTitle}</Title>
        <SubTitle>{config.siteDescription}</SubTitle>
    </TitlesWrapper>

)

export default HomePageHero
