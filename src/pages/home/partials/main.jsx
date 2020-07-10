import React from 'react'

import { MainContainer, MainWrapper, FridgeContainer, FridgeFormContainer, ButtonComponent } from '../home.styles'

const Main = () => {
  return (
    <MainContainer>
      <MainWrapper>
        <FridgeContainer>
          <h2>Fridge asks, <br/> What <b>lunchee</b> do you like to have at your <i>special day</i>?</h2>
          <small>Input your preference lunch date</small>
          <FridgeFormContainer>
            <input type='text' placeholder='dd/mm/yyyy'/>
            <ButtonComponent mode='default'>Generate</ButtonComponent>
          </FridgeFormContainer>
        </FridgeContainer>
      </MainWrapper>
    </MainContainer>
  )
}

export default Main