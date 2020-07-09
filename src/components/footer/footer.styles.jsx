import styled from 'styled-components'

export const FooterContainer = styled.section`
  margin-top: 30px;
  display: block;
  border-top: 1px solid #e1e4e8;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 9999;
`

export const FooterWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  padding: 1em;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  & p {
    font-size: 12px;
    color: #888888;
    margin: 0;
  }
`
