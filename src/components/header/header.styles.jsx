import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.section`
  display: block;
  background-color: #fae858;
`

export const HeaderWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  padding: 1em;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  & nav {
    justify-self: end;
  }
`

export const LogoContainer = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 50px;
  align-items: center;
`

export const LogoText = styled.div`
  font-size: 20px;
  font-weight: 900;
  color: #087558;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding-left: 6px;
`

export const LinkNav = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: #767676;
  font-weight: 500;
  &:hover {
    color: #087558;
  }
`