import React,{ useState } from 'react'
import {StyledFormProgress, StatusWrapper, ModalWrapper} from './styled'
import Image from 'next/image'

import spectificationImage from "../../assets/images/P1/specification.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const StatusWindow = ({currentStep}) => {

  const [showSpec, setShowSpec] = useState(false);

  return (
    <StatusWrapper>
        <p className='specification' onClick={() => setShowSpec(!showSpec )}>Specifications</p>
        <FormProgress currentStep={currentStep}/>
        <p> NPR. 565,000 </p>
    
        {showSpec && <Specification setShowSpec = {setShowSpec}/>}


    </StatusWrapper>
  )
}

const FormProgress = ({currentStep}) => {
    return(
        <StyledFormProgress>
            <div className={`${currentStep >= 1 && " active"}`}><span>1</span> Customize</div>
            <div className={`${currentStep >= 2 && " active"}`}><span>2</span> Payment</div>
            <div className={`${currentStep >= 3 && " active"}`}><span>3</span> Confirm</div>
        </StyledFormProgress>
    )
}

const Specification = ({setShowSpec}) => {

  return(
<ModalWrapper>
  <div className='modal'>
   <FontAwesomeIcon icon={faTimes} className="x-btn" size="lg" onClick = { () => {setShowSpec(false)} }/>
    <Image src={spectificationImage} width={900} height={1000} alt="Specification of Yatri P1"/>
  </div>
    
  </ModalWrapper>
  )
  
}

export default StatusWindow