import React from 'react'
import PageLayout from '../src/components/layout/PageLayout'
import Image from 'next/image'
import vision from "../src/assets/images/vision.jpg"
import { StyledP1 } from './project-one'
import styled from 'styled-components';
const Vision = () => {
  return (
    <PageLayout>
        <StyledP1>
        <Image src={vision} layout="fill"/>
        <h1>Vision</h1>
        <StyledH2>TO REINVENT URBAN MOBILITY</StyledH2>
        </StyledP1>
    </PageLayout>
  )
}

const StyledH2 = styled.h2`
 
 position: absolute;
     z-index: 1000;

     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%) ;

     color: #fff;

     font-size: 3rem;
     font-weight: 600 ;
     letter-spacing: 0.51rem ;
`

export default Vision