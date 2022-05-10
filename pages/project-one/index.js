import React from 'react'
import Calculator from '../../src/components/Calculator'
import Image from 'next/image'
import p1Shoot from "../../src/assets/images/P1/p1-shoot-1.jpg"
import styled from 'styled-components'
import PageLayout from "../../src/components/layout/PageLayout"
import Link from 'next/link'

const ProjectOne = () => {
  return (
    <PageLayout>
    <StyledP1>
      <Image src={p1Shoot} alt="Project one" layout="fill" objectFit='cover'/>
      <h1>PROJECT <span>ONE</span></h1>
    </StyledP1>
    <Calculator />
    <center>
      <Link href="/project-one/pre-order"><ReserveButton>RESERVE NOW</ReserveButton></Link>
    </center>
    </PageLayout>
  )
}

export default ProjectOne

const ReserveButton = styled.a`
       display:inline-block ;

       margin:4rem 0 ;

       border-top: 0.2px solid #fff;
       border-bottom: 0.2px solid #fff;

       cursor: pointer;

       padding: 1rem 2rem;

       font-size: 1.3rem;
       font-weight: 600 ;
       letter-spacing: 0.34rem ;
       color: #fff;
       transition:all 0.2s ease ;

       &:hover{
         transform:scale(1.1) ;
       
     }
`

export const StyledP1 = styled.div`

  margin-top:-10rem ;
  position: relative;
   width:100%;
   height: 100vh ;
   overflow: hidden;

   h1{
     position: absolute;
     z-index: 1000;

     top: 40%;
     left: 50%;
     transform: translate(-50%,-50%) ;

     color: #fff;

     font-size: 5.1rem;
     font-weight: 600 ;
     letter-spacing: 0.51rem ;
   }

   span{
     color: #0cc;
   }

  `