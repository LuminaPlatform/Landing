import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { isMobile } from 'react-device-detect'

import { ExternalLink } from 'components/Link'

const Container = styled.div``

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: fit-content;

  &:hover {
    cursor: pointer;
  }
`

export default function NavLogo() {
  function getImageSize() {
    return isMobile ? 85 : 105
  }

  return (
    <Container>
      <ExternalLink href="https://lumina.credit" target="_self" passHref>
        <Wrapper>
          <Image src={'/static/images/Lumina.svg'} alt="App Logo" width={getImageSize()} height={'35px'} />
        </Wrapper>
      </ExternalLink>
    </Container>
  )
}
