import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const Date = styled.p`
  display: inline-block;
  p,
  span {
    font-weight: 200;
    color: #a7a7a7;
  }
`

const PostDate = props => {
  return (
    <Wrapper>
      <Date>
        <span>Published on {props.date}</span> 
      </Date>
    </Wrapper>
  )
}

export default PostDate
