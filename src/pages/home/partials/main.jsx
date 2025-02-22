import React from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'

import { MainContainer, MainWrapper, FridgeContainer, FridgeFormContainer, ButtonComponent } from '../home.styles'

const Main = ({handleInput, isOpenGenerate, evGenerate, errors, innerInputRef}) => {
  return (
    <MainContainer>
      <MainWrapper>
        <FridgeContainer>
          <h2>Fridge asks, <br/> What <b>lunchee</b> do you like to have at your <i>special day</i>?</h2>
          <small>Input your preference lunch date</small>
          <FridgeFormContainer>
            <InputMask ref={innerInputRef} mask="9999-99-99" maskChar={null} placeholder='YYYY-MM-DD' alwaysShowMask={true} onChange={handleInput} {...(errors.input?.message && { 'data-tip': errors.input?.message, 'data-type': 'error', className: 'is-error' })} />
            {
              isOpenGenerate ? <ButtonComponent mode='default' data-type='custom' onClick={evGenerate}>Generate</ButtonComponent> : (
                <>
                  <i>or</i>
                  <ButtonComponent mode='default' data-type='today' onClick={evGenerate}>Today!</ButtonComponent>
                </>
              )
            }
          </FridgeFormContainer>
        </FridgeContainer>
      </MainWrapper>
    </MainContainer>
  )
}

Main.propTypes = {
  handleInput: PropTypes.func,
  isOpenGenerate: PropTypes.bool,
  evGenerate: PropTypes.func,
  errors: PropTypes.object,
  innerInputRef: PropTypes.any
}

export default Main