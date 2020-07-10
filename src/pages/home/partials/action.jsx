import React from 'react'

import { ActionContainer, ActionWrapper, ActionArrowIcon } from '../home.styles'

const Action = () => {
  return (
    <ActionContainer>
      <ActionWrapper>
        <ActionArrowIcon />
        <p>Please Input your lunch date, and Generate! or Click Today!</p>
      </ActionWrapper>
    </ActionContainer>  
  )
}

export default Action