import React from 'react'

import Logo from '../../assets/images/print.png'

import { HeaderContainer, HeaderWrapper, LogoContainer, LogoText, LinkNav } from './header.styles'

const HeaderIndex = () => {
  return (
    <section>
      <HeaderContainer>
        <HeaderWrapper>
          <LogoContainer>
            <img src={Logo} width='50px'/>
            <LogoText>Lunchee.</LogoText>
          </LogoContainer>
          <nav>
            <LinkNav to='/'>Home</LinkNav>
          </nav>
        </HeaderWrapper>
      </HeaderContainer>
    </section>
  )
}

export default HeaderIndex