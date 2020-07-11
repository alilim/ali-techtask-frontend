import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { generateSlug } from '../../../assets/javascripts/function'

import { IngredientsContainer, IngredientsWrapper, TitleContainer, IngredientsList, IngredientsItem, IngredientsImage, IngredientsButtonContainer, ButtonComponent, LabelEmptyContainer } from '../home.styles'

const Ingredients = ({data, evSubmitIngredients, date, innerRef}) => {
  const [ valueIngredient, setValueIngredient ] = useState([])
  const [ isDisabled, setDisable ] = useState(true)
  
  const evClickIngredient = (e) => {
    const el = e.target,
      containerRef = el.closest('._refIngredientContainer')
    if(!containerRef) return
    const value = containerRef.getAttribute('data-value'),
      isActive = containerRef.classList.contains('is-active')
    let tempValueIngredients = [...valueIngredient]
    if(isActive) {
      containerRef.classList.remove('is-active') 
      const tempValueIngredientsFindIndex = tempValueIngredients.findIndex(_temp => _temp === value)
      if(tempValueIngredientsFindIndex >=0) tempValueIngredients.splice(tempValueIngredientsFindIndex, 1)
    }
    else {
      containerRef.classList.add('is-active')
      tempValueIngredients.push(value)
      
    }

    if(tempValueIngredients.length > 0) setDisable(false)
    else setDisable(true)

    setValueIngredient(tempValueIngredients)
  } 

  const evReset = () => {
    const containerRef = document.querySelectorAll('._refIngredientContainer');
    [].forEach.call(containerRef, function(el) {
      el.classList.remove('is-active')
    })
    setValueIngredient([])
  } 

  const evSubmit = () => {
    evSubmitIngredients(valueIngredient)
  }

  return (
    <IngredientsContainer>
      <IngredientsWrapper ref={innerRef}>
        <TitleContainer>
          <h3>Choose Ingredients</h3>
          <small>Ingredients are used to prepare a special dish from Fridge</small>
        </TitleContainer>
        {
          data ? (
            <>
              <IngredientsList>
                {
                  data.map((_data, idx) => {
                    const MomentUseByDate = moment(_data['use-by'], 'YYYY-MM-DD'),
                      MomentDate =  moment(date, 'YYYY-MM-DD')
                    const isDisabled = MomentUseByDate.diff(MomentDate, 'days') < 0 ? true : false
                    const slugName = generateSlug(_data.title)
                    return (
                      <IngredientsItem className='_refIngredientContainer' title={_data.title} data-value={slugName} key={idx} {...(!isDisabled && { onClick: evClickIngredient })} isDisable={isDisabled}>
                        <IngredientsImage src={`/public/images/ingridients/${slugName}.jpg`} />
                        <h4>{_data.title}</h4>
                      </IngredientsItem>
                    )
                  })
                }
              </IngredientsList>
              <IngredientsButtonContainer>
                <ButtonComponent mode='clear' onClick={evReset}>Clear</ButtonComponent>
                <ButtonComponent mode='default' onClick={evSubmit} {...(isDisabled && { disabled : isDisabled})}>Submit</ButtonComponent>
              </IngredientsButtonContainer>
            </>
          ) : <LabelEmptyContainer>There is no ingredients ...</LabelEmptyContainer> 
        }
      </IngredientsWrapper>
    </IngredientsContainer>
  )
}

Ingredients.propTypes = {
  data: PropTypes.array,
  evSubmitIngredients: PropTypes.func, 
  date: PropTypes.string,
  innerRef: PropTypes.any
}

export default Ingredients