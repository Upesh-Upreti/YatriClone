import React from 'react'
import PageLayout from "../../src/components/layout/PageLayout"
import StyledP0 from './styled'
import Image from 'next/image'
import P0 from "../../src/assets/images/P0/render1.jpg"

const ProjectZero = () => {
  return (
    <PageLayout>
      <StyledP0>
        <Image src={P0}/>
        <h1>PROJECT <span>ZERO</span></h1>
      </StyledP0>
    </PageLayout>
  )
}

export default ProjectZero