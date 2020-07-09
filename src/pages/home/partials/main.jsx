import React from 'react'

import { MainContainer, MainWrapper, FridgeContainer, FridgeFormContainer, ButtonDefault } from '../home.styles'

const Main = () => {
  return (
    <MainContainer>
      <MainWrapper>
        <FridgeContainer>
          <h2>Fridge asks, <br/> What <b>lunchee</b> do you like to have at your <i>special day</i>?</h2>
          <small>Input your preference lunch date</small>
          <FridgeFormContainer>
            <input type='text' placeholder='dd/mm/yyyy'/>
            <ButtonDefault type='submit'>Generate</ButtonDefault>
          </FridgeFormContainer>
        </FridgeContainer>
      </MainWrapper>
    </MainContainer>
  )
}

export default Main