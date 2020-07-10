import React, { useState, useRef, useEffect } from 'react'
import moment from 'moment'

import { debounce } from '../../assets/javascripts/function'

import SingleLayout from  '../../components/layout/single.layout'
import Main from './partials/main'
import Action from './partials/action'
import Ingredients from './partials/ingredients'
import Banner from './partials/banner'
import Recipes from './partials/recipes'

import { LoadingContainer } from './home.styles'

const Index = () => {
  const [ isFirstLoad, setFirstLoad ] = useState(false)
  const [ isOpenGenerate, setOpenGenerate ] = useState(false)
  const [ isLoadingIngredient, setLoadingIngredient ] = useState(false)
  const [ isLoadingRecipe, setLoadingRecipe ] = useState(false)
  const [ valueDate, setValueDate ] = useState('')
  const [ ingredientData, setIngredientData ] = useState(null)
  const [ recipeData, setRecipeData ] = useState(null)
  const [ valueIngredient, setValueIngredient ] = useState(null)

  const ingredientRef = useRef(),
    recipeRef = useRef(),
    loadingRef = useRef(),
    loadingRecipeRef = useRef(),
    prefixUrl = 'https://lb7u7svcm5.execute-api.ap-southeast-1.amazonaws.com/dev'

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

  useEffect(() => {
    if(isLoadingIngredient) scrollToRef(loadingRef)
  }, [isLoadingIngredient])

  useEffect(() => {
    if(isLoadingRecipe) scrollToRef(loadingRecipeRef)
  }, [isLoadingRecipe])

  const delayedCallback = debounce((e) => {
    const val = e.target.value === 'YYYY-MM-DD' ? '' : e.target.value
    console.log(val, "value")
    setValueDate(val)
    setOpenGenerate((val ? true : false))
  }, 300)

  const handleInput = (e) => {
    e.persist()
    delayedCallback(e)
  }

  const evGenerate = (e) => {
    if(!isFirstLoad) setFirstLoad(true)

    const type  = e.target.getAttribute('data-type'),
      url = `${prefixUrl}/ingredients`

    if(type === 'today') {
      const today = moment().format('YYYY-MM-DD')
      setValueDate(today)
    }

    setIngredientData(null)
    setRecipeData(null)
    setLoadingIngredient(true)

    async function f() {
      try {
        const response = await fetch(url, {
          method: 'GET'
        })
        const result = await response.json()
        if(result.length) setIngredientData(result)
        scrollToRef(ingredientRef)
      } catch(err) {
        setIngredientData([])
      }
    }

    setTimeout(() => {
      f()
      setLoadingIngredient(false)
    }, 888)
  }

  const evSubmitIngredients = (value) => {
    const url = `${prefixUrl}/recipes?ingredients=${value.join()}`

    setRecipeData(null)
    setValueIngredient(value)
    setLoadingRecipe(true)

    async function f() {
      try {
        const response = await fetch(url, {
          method: 'GET'
        })
        const result = await response.json()
        if(result.length) setRecipeData(result)
        scrollToRef(recipeRef)
      } catch(err) {
        setRecipeData([])
      }
    }

    setTimeout(() => {
      f()
      setLoadingRecipe(false)
    }, 888)
  }

  return (
    <SingleLayout>
      <Main handleInput={handleInput} isOpenGenerate={isOpenGenerate} evGenerate={evGenerate} />
      {
        !isFirstLoad ? (
          <>
            <Action />
            <Recipes mode='placeholder' />
          </>
        ) : (
          <>
            { isLoadingIngredient && <LoadingContainer ref={loadingRef}><div className='loading'><div></div><div></div></div></LoadingContainer> }
            { ingredientData && <Ingredients innerRef={ingredientRef} data={ingredientData} evSubmitIngredients={evSubmitIngredients} date={valueDate} /> } 
            { isLoadingRecipe && <LoadingContainer ref={loadingRecipeRef}><div className='loading'><div></div><div></div></div></LoadingContainer> }
            {
              recipeData && (
                <>
                  <Banner />
                  <Recipes data={recipeData} innerRef={recipeRef} ingredients={valueIngredient} />
                </>
              )
            }
          </>
        )
      }
    </SingleLayout>
  )
}

export default Index