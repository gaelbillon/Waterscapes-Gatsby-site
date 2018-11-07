import React from 'react'
import styled from 'styled-components'

const PostContentWrapper = styled.div`
  margin: 0 auto auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const PostContentContainer = props => {
    return <PostContentWrapper>{props.children}</PostContentWrapper>
}

export default PostContentContainer