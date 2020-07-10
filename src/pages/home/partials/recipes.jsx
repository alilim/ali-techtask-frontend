import React from 'react'
import PropTypes from 'prop-types'

import { RecipesContainer, RecipesWrapper, TitleContainer, RecipesList, RecipesItem, RecipesImageContainer, RecipesImage, RecipeDetailContainer, RecipeDetailWrapper, RecipeDetailImage, LabelEmptyContainer } from '../home.styles'

const Recipes = ({mode, data, ingredients, innerRef}) => {
  const titleEl = (mode && mode === 'placeholder') ? (
    <TitleContainer>
      <h3>Most Popular Recipes</h3>
      <small>Popular recipes</small>
    </TitleContainer>
  ) : (
    <TitleContainer>
      <h3>Recipes</h3>
      <small>Finding recipes for ingredients you already choosen</small>
      <br/>
      {
        ingredients.length > 0 && <b>- {ingredients.join(", ")} -</b>
      }
    </TitleContainer>
  )
  return (
    <RecipesContainer>
      <RecipesWrapper ref={innerRef}>
        {titleEl}
        {
          (mode && mode === 'placeholder') ? (
            <RecipesList>
              <RecipesItem>
                <RecipesImageContainer>
                  <RecipesImage src='/public/images/foods/food8.jpg' />
                </RecipesImageContainer>
                <RecipeDetailContainer>
                  <h4>Hotdog Bun with Cheese & Salad</h4>  
                  <RecipeDetailWrapper>
                    <RecipeDetailImage src='/public/images/icons/bamboo.svg' />
                    <p>Eeg, Cheese, Lettuce, Hotdog Bun</p>
                  </RecipeDetailWrapper>
                </RecipeDetailContainer>      
              </RecipesItem>
              <RecipesItem>
                <RecipesImageContainer>
                  <RecipesImage src='/public/images/foods/food9.jpg' />
                </RecipesImageContainer>
                <RecipeDetailContainer>
                  <h4>Soupe à l’oignon</h4>  
                  <RecipeDetailWrapper>
                    <RecipeDetailImage src='/public/images/icons/bamboo.svg' />
                    <p>Mushrooms, Salad Dressing, Eeg, Cheese</p>
                  </RecipeDetailWrapper>
                </RecipeDetailContainer>      
              </RecipesItem>
              <RecipesItem>
                <RecipesImageContainer>
                  <RecipesImage src='/public/images/foods/food10.jpg' />
                </RecipesImageContainer>
                <RecipeDetailContainer>
                  <h4>Boeuf bourguignon</h4>  
                  <RecipeDetailWrapper>
                    <RecipeDetailImage src='/public/images/icons/bamboo.svg' />
                    <p>Bacon, Tomato, Cucumber, Salad Dressing, Sausage</p>
                  </RecipeDetailWrapper>
                </RecipeDetailContainer>      
              </RecipesItem>
            </RecipesList>
          ) : (
            data.length ? (
              <RecipesList>
                {
                  data.map((_data, idx) => {
                    return (
                      <RecipesItem key={idx}>
                        <RecipesImageContainer>
                          <RecipesImage src={`/public/images/foods/food${idx+1}.jpg`} />
                        </RecipesImageContainer>
                        <RecipeDetailContainer>
                          <h4>{_data.title}</h4>  
                          <RecipeDetailWrapper>
                            <RecipeDetailImage src='/public/images/icons/bamboo.svg' />
                            <p>{_data.ingredients.length > 0 && _data.ingredients.join()}</p>
                          </RecipeDetailWrapper>
                        </RecipeDetailContainer>      
                      </RecipesItem>
                    )
                  })
                }
              </RecipesList>
            ) : <LabelEmptyContainer>There is no Recipes ...</LabelEmptyContainer>
          )
        }
      </RecipesWrapper>
    </RecipesContainer>
  )
}

Recipes.propTypes = {
  mode: PropTypes.string,
  data: PropTypes.array,
  ingredients: PropTypes.array,
  innerRef: PropTypes.any
}

export default Recipes 