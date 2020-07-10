import React from 'react'
import PropTypes from 'prop-types'

import IngridientIcon from '../../../assets/images/icons/bamboo.svg'

import { RecipesContainer, RecipesWrapper, TitleContainer, RecipesList, RecipesItem, RecipesImageContainer, RecipesImage, RecipeDetailContainer, RecipeDetailWrapper, RecipeDetailImage, LabelEmptyContainer } from '../home.styles'

const Recipes = ({mode}) => {
  console.log(mode,'mode')
  const TitleEl = (mode && mode === 'default') ? (
    <TitleContainer>
      <h3>Most Popular Recipes</h3>
      <small>Popular recipes</small>
    </TitleContainer>
  ) : (
    <TitleContainer>
      <h3>Recipes</h3>
      <small>Finding recipes for ingredients you already choosen</small>
      <br/>
      <b>Cheese, Eegs, Mushroom</b>
    </TitleContainer>
  )

  return (
    <RecipesContainer>
      <RecipesWrapper>
        {TitleEl}
        <RecipesList>
          <RecipesItem>
            <RecipesImageContainer>
              <RecipesImage src='/public/images/foods/food1.jpg' />
            </RecipesImageContainer>
            <RecipeDetailContainer>
              <h4>Ham and Cheese Toastie</h4>  
              <RecipeDetailWrapper>
                <RecipeDetailImage src={IngridientIcon} />
                <p>Ham, Cheese, Bread, Butter</p>
              </RecipeDetailWrapper>
            </RecipeDetailContainer>      
          </RecipesItem>
          <RecipesItem>
            <RecipesImageContainer>
              <RecipesImage src='/public/images/foods/food2.jpg' />
            </RecipesImageContainer>
            <RecipeDetailContainer>
              <h4>Salad</h4>  
              <RecipeDetailWrapper>
                <RecipeDetailImage src={IngridientIcon} />
                <p>Lettuce, Tomato, Cucumber, Beetroot, Salad Dressing</p>
              </RecipeDetailWrapper>
            </RecipeDetailContainer>      
          </RecipesItem>
          <RecipesItem>
            <RecipesImageContainer>
              <RecipesImage src='/public/images/foods/food3.jpg' />
            </RecipesImageContainer>
            <RecipeDetailContainer>
              <h4>Hotdog</h4>  
              <RecipeDetailWrapper>
                <RecipeDetailImage src={IngridientIcon} />
                <p>Hotdog Bun, Sausage, Ketchup, Mustard</p>
              </RecipeDetailWrapper>
            </RecipeDetailContainer>      
          </RecipesItem>
        </RecipesList>
        {/* <LabelEmptyContainer>There is no Recipes ...</LabelEmptyContainer> */}
      </RecipesWrapper>
    </RecipesContainer>
  )
}

Recipes.propTypes = {
  mode: PropTypes.string
}

export default Recipes 