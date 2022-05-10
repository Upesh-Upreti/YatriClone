import React, { useState } from 'react'
import OrderWindow from '../OrderWindow'
import StatusWindow from '../StatusWindow'
import ImageWindow from './ImageWindow'
import StyledGrid from './styled'

import blueVariant from "../../assets/images/P1/blue.png"
import chocolateVariant from "../../assets/images/P1/chocolate.png"
import sunGlowVariant from "../../assets/images/P1/sun-glow.png"


const Grid = () => {

  const   BIKE_VARIANTS = [{
    color : "#E6A750",
    variant : "Sunglow",
    image : sunGlowVariant
},{
    color :  "#abdbec",
    variant : "fire",
    image : blueVariant
},{
    color :  "#490604",
    variant : "Charcoal",
    image : chocolateVariant
}]

const [selectedVariant, setSelectedVariant] = useState(BIKE_VARIANTS[0]);

  return (
    <StyledGrid>
      <div className='image-window'>
        <ImageWindow imageUrl = {selectedVariant.image}/>
      </div>
      <div className='order-window'>
        <OrderWindow bikeVariants = { BIKE_VARIANTS } selectedVariant = { selectedVariant } setSelectedVariant = { setSelectedVariant} />
      </div>
      <div className='status-window'>
        <StatusWindow currentStep={1}/>
      </div>  
    </StyledGrid>

  )
}

export default Grid