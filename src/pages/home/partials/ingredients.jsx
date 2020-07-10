import React from 'react'

import { IngredientsContainer, IngredientsWrapper, TitleContainer, IngredientsList, IngredientsItem, IngredientsImage, IngredientsButtonContainer, ButtonComponent, LabelEmptyContainer } from '../home.styles'

const Ingredients = () => {
  return (
    <IngredientsContainer>
      <IngredientsWrapper>
        <TitleContainer>
          <h3>Choose Ingredients</h3>
          <small>Ingredients are used to prepare a special dish from Fridge</small>
        </TitleContainer>
        <IngredientsList>
          <IngredientsItem>
            <IngredientsImage src='/public/images/ingridients/ham.jpg' />
            <h4>Ham</h4>
          </IngredientsItem>
          <IngredientsItem isDisable={true}>
            <IngredientsImage src='/public/images/ingridients/cheese.jpg' />
            <h4>Cheese</h4>
          </IngredientsItem>
          <IngredientsItem>
            <IngredientsImage src='/public/images/ingridients/bread.jpg' />
            <h4>Bread</h4>
          </IngredientsItem>
          <IngredientsItem isActive={true}>
            <IngredientsImage src='/public/images/ingridients/butter.jpg' />
            <h4>Butter</h4>
          </IngredientsItem>
          <IngredientsItem>
            <IngredientsImage src='/public/images/ingridients/bacon.jpg' />
            <h4>Bacon</h4>
          </IngredientsItem>
          <IngredientsItem>
            <IngredientsImage src='/public/images/ingridients/eggs.jpg' />
            <h4>Eggs</h4>
          </IngredientsItem>
          <IngredientsItem isActive={true}>
            <IngredientsImage src='/public/images/ingridients/mushrooms.jpg' />
            <h4>Mushrooms</h4>
          </IngredientsItem>
          <IngredientsItem>
            <IngredientsImage src='/public/images/ingridients/sausage.jpg' />
            <h4>Sausage</h4>
          </IngredientsItem>
          <IngredientsItem>
            <IngredientsImage src='/public/images/ingridients/hotdog-bun.jpg' />
          </IngredientsItem>
          <IngredientsItem>
            <IngredientsImage src='/public/images/ingridients/ketchup.jpg' />
            <h4>Ketchup</h4>
          </IngredientsItem>
          <IngredientsItem isActive={true}>
            <IngredientsImage src='/public/images/ingridients/mustard.jpg' />
            <h4>Mustard</h4>
          </IngredientsItem>
          <IngredientsItem>
            <IngredientsImage src='/public/images/ingridients/lettuce.jpg' />
            <h4>Lettuce</h4>
          </IngredientsItem>
          <IngredientsItem isActive={true}>
            <IngredientsImage src='/public/images/ingridients/tomato.jpg' />
            <h4>Tomato</h4>
          </IngredientsItem>
          <IngredientsItem>
           <IngredientsImage src='/public/images/ingridients/cucumber.jpg' />
            <h4>Cucumber</h4>
          </IngredientsItem>
          <IngredientsItem>
           <IngredientsImage src='/public/images/ingridients/beetroot.jpg' />
            <h4>Beetroot</h4>
          </IngredientsItem>
          <IngredientsItem isActive={true}>
           <IngredientsImage src='/public/images/ingridients/salad-dressing.jpg' />
            <h4>Salad Dressing</h4>
          </IngredientsItem>
        </IngredientsList>
        <IngredientsButtonContainer>
          <ButtonComponent mode='clear'>Clear</ButtonComponent>
          <ButtonComponent mode='default'>Submit</ButtonComponent>
        </IngredientsButtonContainer>
        {/* <LabelEmptyContainer>There is no ingredients ...</LabelEmptyContainer> */}
      </IngredientsWrapper>
    </IngredientsContainer>
  )
}

export default Ingredients