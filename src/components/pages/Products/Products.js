import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'

import {homeObjOne} from './Data'

const Products = () => {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Pricing />
      
    </>
  )
}

export default Products
