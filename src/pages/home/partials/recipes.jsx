import React from 'react'

import IngridientIcon from '../../../assets/images/icons/bamboo.svg'
import Food1Recipes from '../../../assets/images/foods/food1.jpg'
import Food2Recipes from '../../../assets/images/foods/food2.jpg'
import Food3Recipes from '../../../assets/images/foods/food3.jpg'
// import Food4Recipes from '../../../assets/images/foods/food4.jpg'
// import Food5Recipes from '../../../assets/images/foods/food5.jpg'
// import Food6Recipes from '../../../assets/images/foods/food6.jpg'
// import Food7Recipes from '../../../assets/images/foods/food7.jpg'
// import Food8Recipes from '../../../assets/images/foods/food8.jpg'
// import Food9Recipes from '../../../assets/images/foods/food9.jpg'
// import Food10Recipes from '../../../assets/images/foods/food10.jpg'


import { RecipesContainer, RecipesWrapper, TitleContainer, RecipesList, RecipesItem, RecipesImageContainer, RecipesImage, RecipeDetailContainer, RecipeDetailWrapper, RecipeDetailImage, LabelEmptyContainer } from '../home.styles'

const Recipes = () => {
  return (
    <RecipesContainer>
      <RecipesWrapper>
        <TitleContainer>
          <h3>Recipes</h3>
          <small>Finding recipes for ingredients you already choosen</small>
          <br/>
          <b>Cheese, Eegs, Mushroom</b>
        </TitleContainer>
        <RecipesList>
          <RecipesItem>
            <RecipesImageContainer>
              <RecipesImage src={Food1Recipes}/>
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
              <RecipesImage src={Food2Recipes} />
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
              <RecipesImage src={Food3Recipes} />
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

export default Recipes 