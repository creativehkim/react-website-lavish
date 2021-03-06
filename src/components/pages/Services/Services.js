import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'

import { homeObjTwo } from './Data'

const Services = () => {
  return (
    <>
      <HeroSection {...homeObjTwo} />
      <Pricing />
    </>
  )
}

export default Services
