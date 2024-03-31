import React from 'react'
import Image from 'next/image'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'

import { ExternalLink } from 'components/Link'
import { RowCenter } from 'components/Row'

import Discord from '/public/static/images/footer/ic-discord.svg'
import Twitter from '/public/static/images/footer/ic-x.svg'
import Github from '/public/static/images/footer/ic-github.svg'
import Email from '/public/static/images/footer/ic-email.svg'
import NavLogo from 'components/Layout/NavLogo'
// import Docs from '/public/static/images/footer/Docs.svg'

const Wrapper = styled(RowCenter)`
  color: ${({ theme }) => theme.G60};
  text-align: center;
  gap: 20px;
  font-size: 13px;
  padding: 12px 100px;
  ${({ theme }) => theme.mediaWidth.upToLarge`
    padding: 12px 40px;
`}
  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: column;
    margin-top: 20px;
    padding: 10px;
  `}
`

const Text = styled.div`
  padding: 20px;
`

const Logos = styled.div`
  display: flex;
  gap: 65px;
  img {
    &:hover {
      filter: brightness(1.5);
    }
  }
  ${({ theme }) => theme.mediaWidth.upToMedium`
    justify-content: center;
    gap: 30px;
  `};
`

export function LogoLine() {
  return (
    <Wrapper>
      <NavLogo />
    </Wrapper>
  )
}

export function Disclaimer() {
  return (
    <Wrapper>
      <Text>
        <ExternalLink href="https://lumina.credit" style={{ opacity: 0.5 }}>
          {new Date().getFullYear()} Lumina. All rights to the people.
        </ExternalLink>
      </Text>
    </Wrapper>
  )
}

export function Footer() {
  function getImageSize() {
    return isMobile ? 25 : 30
  }
  return (
    <Wrapper>
      <Logos>
        <ExternalLink href="https://discord.com/invite/RTEfMJKb6U">
          <Image src={Discord} alt="Discord Logo" width={getImageSize()} height={getImageSize()} />
        </ExternalLink>
        <ExternalLink href="https://twitter.com/LuminaPlatform">
          <Image src={Twitter} alt="Twitter Logo" width={getImageSize()} height={getImageSize()} />
        </ExternalLink>
        <ExternalLink href="https://github.com/LuminaPlatform">
          <Image src={Github} alt="Github Logo" width={getImageSize()} height={getImageSize()} />
        </ExternalLink>
        <ExternalLink href="mailto:contact@lumina.credit">
          <Image src={Email} alt="Email Logo" width={getImageSize()} height={getImageSize()} />
        </ExternalLink>
      </Logos>
    </Wrapper>
  )
}
