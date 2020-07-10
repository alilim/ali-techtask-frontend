import styled, { css } from 'styled-components'

const containerStyled = css`
  display: grid;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`

const subtTitleStyled = css`
  font-weight: 400;
  color: #767676;
  font-size: 13px;
  letter-spacing: .3px;
`

const imageStyled = css`
  transition: transform .3s ease,opacity .3s;
  &:hover {
    transform: scale3d(1.1,1.1,1);
    opacity: .9;
  }
`

const headingStyled = css`
  & h2 {
    line-height: 30px;
  }
  & b {
    font-weight: 900;
  }
  & small {
    ${subtTitleStyled}
    padding-left: 3px;
  }
`

const getIngredientsItemModifiedStyled = ({isActive, isDisable}) => {
  if(isActive) return `
    display: block;
    background: #A7D469;
    border: 2px dashed #fff;
    &:after {
      content: url('/public/images/icons/right.svg');
      width: 25px;
      height: 25px;
      position: absolute;
      top: 45%;
      left: 50%;
      margin-left: -14px;
      margin-top: -14px;
    }
    & h4 {
      top: 60%;
      color: #087558;
      text-shadow: none;
    }
    & ${IngredientsImage} {
      display: none;
    }
  `
  else if(isDisable) return `
    cursor: default;
    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 100;
      left: 0;
      top: 0;
      background: #000000;
      opacity: .65;
    }
    &:after {
      content: url('/public/images/icons/expired.png');
      width: 50px;
      height: 10px;
      position: absolute;
      z-index: 101;
      left: 50%;
      top: 50%;
      margin-left: -70px;
      margin-top: -50px;
    }
  `
}


const getButtonModifiedStyled = ({mode}) => {
  if(mode) {
    if(mode === 'clear') return `
      background: transparent;
      border: 1px solid #ccc;
    `
    else if(mode === 'default') return `
      color: #ffffff;
      background: #087558;
      &:hover {
        color: #087558;
        background: #A7D469;
      }
    `
  }
}

export const MainContainer = styled.section`
  background-image:url('/public/images/backgrounds/lauren-mancke-unsplash.jpg');
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
  background-size: cover;
`

export const MainWrapper = styled.div`
  justify-items: center;
  ${containerStyled}
`

export const FridgeContainer = styled.article`
  margin: 10% 0 12% 25%;
  width: 380px;
  ${headingStyled}
`

export const FridgeFormContainer = styled.form`
  margin-top: 3px;
  & input {
    width: 250px;
    height: 40px;
    border-radius: 24px;
    background-color: #eee;
    border: 1px solid transparent;
    padding: 10px 20px;
    outline: none;
    font-size: 14px;
    &:focus {
      border-color: #087558;
      background-color: #ffffff;
    }
  }
`

export const IngredientsButtonContainer = styled.aside`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  margin: 10px auto;
`

export const ButtonComponent = styled.button`
  padding: 15px 25px;
  line-height: 13px;
  box-shadow: 20px 37px 102px rgba(0,0,0,0.098);
  border: none;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 30px;
  cursor: pointer;
  height: 40px;
  ${getButtonModifiedStyled}
`

export const ActionContainer = styled.section`
  padding: 30px 0 0;
  position: relative;
`

export const ActionWrapper = styled.div`
  ${containerStyled}
  & p {
    padding: 30px 0;
    text-align: center;
  }
`

export const ActionArrowIcon = styled.div`
  width: 60px;
  height: 30px;
  transform: rotate(65deg) scaleX(-1) scaleY(-1);
  position: absolute;
  top: 0;
  right: 32%;
  &:before {
    content: url('/public/images/icons/Arrow.svg');
  }
`

export const IngredientsContainer = styled.section`
  padding: 30px 0;
  background-image:url('/public/images/backgrounds/cofee.jpg');
  background-repeat: repeat;
  width: 100%;
  height: auto;
  background-size: cover;
`

export const IngredientsWrapper = styled.div`
  ${containerStyled}
`

export const TitleContainer = styled.div`
  text-align: center;
  & h3 {
    margin-bottom: 0px;
  }
  & small {
    ${subtTitleStyled}
  }
`

export const IngredientsList = styled.ul`
  margin: 30px 20px;
  list-style-type: none;
  position: relative;
  display: inline-grid;
  grid-template-areas: "a a a a ";
  grid-gap: 15px 10px;
  justify-items: center;
  align-items: center;
  padding-left: 0;
`

export const IngredientsItem = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  height: 150px;
  text-align: center;
  cursor: pointer;
  & h4 {
    color: #fff;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    text-shadow: 0px 2px 2px #665D5D;
  }
  ${getIngredientsItemModifiedStyled}
`

export const IngredientsImage = styled.img`
  ${imageStyled}
`

export const LabelEmptyContainer = styled.label`
  display: block;
  width: 100%;
  text-align: center;
  margin: 20px 0px;
  font-size: 13px;
  font-weight: 300;
  font-style: italic;
  color: #888888;
`

export const BannerContainer = styled.section`
  background-image:url('/public/images/backgrounds/vanesa-conunaese-E-unsplash.jpg');
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
  background-size: cover;
  background-position: center;
`

export const BannerWrapper = styled.div`
  justify-items: center;
  ${containerStyled}
`
export const BannerEnjoyContainer = styled.div`
  margin: 5% 0px 5% 25%;
  width: 380px;
  ${headingStyled}
`

export const RecipesContainer = styled.section`
  padding: 20px 0 30px;
  margin-bottom: 70px;
`

export const RecipesWrapper = styled.div`
  ${containerStyled}
`

export const RecipesList = styled.ul`
  margin: 30px 20px;
  list-style-type: none;
  position: relative;
  display: inline-grid;
  grid-gap: 15px 20px;
  justify-items: center;
  align-items: center;
  grid-area: auto;
  grid-template-areas: "a a a";
  padding-left: 0;
`

export const RecipesItem = styled.li`
  width: 100%;
  height: 100%;
`

export const RecipesImageContainer = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 20px 37px 102px rgba(0,0,0,0.098);
`

export const RecipesImage = styled.img`
  ${imageStyled}
  width: 100%;
  height: auto;
`

export const RecipeDetailContainer = styled.div`
  padding: 10px;
  & h4 {
    line-height: 25px;
    font-size: 20px;
    font-weight: 600;
    color: #A7D469;
    letter-spacing: .001px;
    margin-top: 4px;
    margin-bottom: 4px;
  }
`

export const RecipeDetailWrapper = styled.div`
  & p {
    font-size: 12px;
    color: #767676;
    float: left;
    width: 90%;
    margin: 0;
    line-height: 16px;
    margin-left: 10px;
  }
`

export const RecipeDetailImage = styled.img`
  width: 18px;
  height: 16px;
  float: left;
`