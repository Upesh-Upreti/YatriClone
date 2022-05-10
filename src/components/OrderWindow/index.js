import React, { useState} from 'react'
import StyledOrderWindow, { ColorSelector, FormField } from './styled'

const OrderWindow = ({ bikeVariants,selectedVariant,setSelectedVariant }) => {
    
  return (
    <StyledOrderWindow>
        <form>
            <FormField>
            <label>Your Full Name</label>
            <input type="email"/>
            </FormField>
            
            <FormField>
            <label>Your Email Address</label>
            <input type="email"/>
            </FormField>

            <FormField>
            <label>Your Phone Number</label>
            <input type="number"/>
            </FormField>

            <FormField>
            <label>Customize Color</label>
            {
                bikeVariants.map((variant,index) =>{
                    return <ColorSelector key={index} bikeColor = {variant.color} active = {selectedVariant.variant === variant.variant} onClick = {() => setSelectedVariant(variant)} />
                }) 
            }
            </FormField>
            

            <FormField>
            <input type="submit" value="Proceed to Payment"/>
            </FormField>

        </form>
    </StyledOrderWindow>
  )
}

export default OrderWindow