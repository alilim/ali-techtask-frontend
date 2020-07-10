import React from 'react'

import SingleLayout from  '../../components/layout/single.layout'
import Main from './partials/main'
import Action from './partials/action'
import Ingredients from './partials/ingredients'
import Banner from './partials/banner'
import Recipes from './partials/recipes'


const Index = () => {
  return (
    <SingleLayout>
      <Main />
      <Action />
      {/* <Recipes mode='default' /> */}
      <Ingredients />
      <Banner />
      <Recipes />
    </SingleLayout>
  )
}

export default Index