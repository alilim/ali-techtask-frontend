import React from 'react'
import PropTypes from 'prop-types'

import Header from '../header/header'
import Footer from '../footer/footer'

import { SingleLayoutContainer } from './layout.styles'

const SingleLayout = ({children}) => {
  return (
    <SingleLayoutContainer>
      <Header />
      {children}
      <Footer />
    </SingleLayoutContainer>
  )
}

SingleLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default SingleLayout