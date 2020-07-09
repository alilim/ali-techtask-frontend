import React from 'react'

import { BannerContainer, BannerWrapper, BannerEnjoyContainer } from '../home.styles'

const Banner = () => {
  return (
    <BannerContainer>
      <BannerWrapper>
        <BannerEnjoyContainer>
          <h2>Fridge says, <br/> The <b>lunchee</b> has done working of magic for Recipes</h2>
          <small>Enjoy your recipes</small>
        </BannerEnjoyContainer>
      </BannerWrapper>
    </BannerContainer>
  )
}

export default Banner
