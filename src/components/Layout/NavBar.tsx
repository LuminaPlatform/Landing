import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { isMobileOnly as isMobile } from 'react-device-detect'

import routes from 'constants/files/routes.json'
import { Z_INDEX } from 'theme'
import NavLogo from './NavLogo'
import { PrimaryButton } from 'components/Button'
import { waitingText } from 'constants/misc'

const Wrapper = styled.div`
  padding: 0px 2rem;
  height: 55px;
  align-items: center;

  gap: 5px;
  z-index: ${Z_INDEX.fixed};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 0px 1.25rem;
  `};
`

const DefaultWrapper = styled(Wrapper)`
  display: flex;
  flex-flow: row nowrap;
  font-family: 'Inter';
  font-size: 16px;
  line-height: 19px;
  justify-content: space-between;
  margin-top: 6px;
`

const MobileWrapper = styled(Wrapper)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`

const Routes = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 4px;
`

export const NavbarContentWrap = styled.div`
  list-style: none;
  margin: auto;
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
  padding: 10px 0;
  position: relative;

  &:hover {
    display: block;
    & > ul {
      display: block;
    }
  }
`

export const SubNavbarContentWrap = styled.ul`
  display: none;
  padding: 12px 0 12px 0px;
  background: ${({ theme }) => theme.bg2};
  border-radius: 10px;
  list-style: none;
  position: absolute;
  top: 50px;
  margin-top: -14px;
  left: 50%;
  transform: translateX(-50%);

  & > li > div {
    border-radius: 0;
    padding: 0.45rem 1rem;
    min-width: 150px;
  }
`

const SimpleLinkWrapper = styled.div`
  margin-top: 6px;
`

const NavLink = styled.div`
  font-size: 1rem;
  padding: 0.25rem 1rem;
  text-align: center;
  color: ${({ theme }) => theme.text1};
  cursor: pointer;

  &:hover {
    ${({ theme }) =>
      `
      color: ${theme.P200};
  `};
  }
`

export default function NavBar() {
  function getMobileContent() {
    return (
      <MobileWrapper>
        <NavLogo />
        <PrimaryButton onClick={() => alert(waitingText)}>Launch App</PrimaryButton>
      </MobileWrapper>
    )
  }

  function getDefaultContent() {
    return (
      <DefaultWrapper>
        <NavLogo />
        <Routes>
          {routes.map((item) => {
            return (
              <SimpleLinkWrapper key={item.id}>
                <Link href={item.path} passHref>
                  <NavLink>{item.text}</NavLink>
                </Link>
              </SimpleLinkWrapper>
            )
          })}
        </Routes>
        <PrimaryButton onClick={() => alert(waitingText)}>Launch App</PrimaryButton>
      </DefaultWrapper>
    )
  }

  return isMobile ? getMobileContent() : getDefaultContent()
}
