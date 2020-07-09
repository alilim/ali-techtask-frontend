import React from 'react'

import BaconIngredient from '../../../assets/images/ingridients/bacon.jpg'
import BeetrootIngredient from '../../../assets/images/ingridients/beetroot.jpg'
import BreadIngredient from '../../../assets/images/ingridients/bread.jpg'
import ButterIngredient from '../../../assets/images/ingridients/butter.jpg'
import CheeseIngredient from '../../../assets/images/ingridients/cheese.jpg'
import CucumberIngredient from '../../../assets/images/ingridients/cucumber.jpg'
import EggsIngredient from '../../../assets/images/ingridients/eggs.jpg'
import HamIngredient from '../../../assets/images/ingridients/ham.jpg'
import HotdogBunIngredient from '../../../assets/images/ingridients/hotdog-bun.jpg'
import KetchupIngredient from '../../../assets/images/ingridients/ketchup.jpg'
import LettuceIngredient from '../../../assets/images/ingridients/lettuce.jpg'
import MushroomsIngredient from '../../../assets/images/ingridients/mushrooms.jpg'
import MustardIngredient from '../../../assets/images/ingridients/mustard.jpg'
import SaladDressingIngredient from '../../../assets/images/ingridients/salad-dressing.jpg'
import SausageIngredient from '../../../assets/images/ingridients/sausage.jpg'
import TomatoIngredient from '../../../assets/images/ingridients/tomato.jpg'


import { IngredientsContainer, IngredientsWrapper, TitleContainer, IngredientsList, IngredientsItem, IngredientsImage, ButtonDefault, LabelEmptyContainer } from '../home.styles'

const Ingredients = () => {
  return (
    <IngredientsContainer>
      <IngredientsWrapper>
        <TitleContainer>
          <h3>Choose Ingredients</h3>
          <small>Ingredients are used to prepare a special dish from Fridge</small>
        </TitleContainer>
        <IngredientsList>
          <IngredientsItem isActive={true}>
            <IngredientsImage src={HamIngredient} />
            <h4>Ham</h4>
          </IngredientsItem>
          <IngredientsItem isDisable={true}>
            <IngredientsImage src={CheeseIngredient} />
            <h4>Cheese</h4>
          </IngredientsItem>
          <IngredientsItem>
            <IngredientsImage src={BreadIngredient} />
            <h4>Bread</h4>
          </IngredientsItem>
          <IngredientsItem isActive={true}>
            <IngredientsImage src={ButterIngredient} />
            <h4>Butter</h4>
          </IngredientsItem>
          <IngredientsItem>
            <IngredientsImage src={BaconIngredient} />
            <h4>Bacon</h4>
          </IngredientsItem>
          <IngredientsItem>
            <IngredientsImage src={EggsIngredient} />
            <h4>Eggs</h4>
          </IngredientsItem>
          <IngredientsItem isActive={true}>
            <IngredientsImage src={MushroomsIngredient} />
            <h4>Mushrooms</h4>
          </IngredientsItem>
          <IngredientsItem>
            <IngredientsImage src={SausageIngredient} />
            <h4>Sausage</h4>
          </IngredientsItem>
          <IngredientsItem>
            <IngredientsImage src={HotdogBunIngredient} />
            <h4>Hotdog Bun</h4>
          </IngredientsItem>
          <IngredientsItem>
            <IngredientsImage src={KetchupIngredient} />
            <h4>Ketchup</h4>
          </IngredientsItem>
          <IngredientsItem isActive={true}>
            <IngredientsImage src={MustardIngredient} />
            <h4>Mustard</h4>
          </IngredientsItem>
          <IngredientsItem>
            <IngredientsImage src={LettuceIngredient} />
            <h4>Lettuce</h4>
          </IngredientsItem>
          <IngredientsItem isActive={true}>
            <IngredientsImage src={TomatoIngredient} />
            <h4>Tomato</h4>
          </IngredientsItem>
          <IngredientsItem>
            <IngredientsImage src={CucumberIngredient} />
            <h4>Cucumber</h4>
          </IngredientsItem>
          <IngredientsItem>
            <IngredientsImage src={BeetrootIngredient} />
            <h4>Beetroot</h4>
          </IngredientsItem>
          <IngredientsItem isActive={true}>
            <IngredientsImage src={SaladDressingIngredient} />
            <h4>Salad Dressing</h4>
          </IngredientsItem>
        </IngredientsList>
        <ButtonDefault>Submit</ButtonDefault>
        {/* <LabelEmptyContainer>There is no ingredients ...</LabelEmptyContainer> */}
      </IngredientsWrapper>
    </IngredientsContainer>
  )
}

export default Ingredients