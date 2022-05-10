import React from 'react'
import StyledImageWindow from './styled'
import defaultImage from "../../../assets/images/P1/sun-glow.png"
import Image from "next/image"
import logo from "../../../assets/images/logo.png"
import Link from "next/link"

const ImageWindow = ({imageUrl, variant}) => {
  return (
    <StyledImageWindow>
        <div className='logo'>
            <Link href="/"><a><Image src={logo} alt="Yatri Logo" height={16} width={64}/></a></Link>
        </div>
        <div className="image-wrapper">
        <Image src={imageUrl} alt={variant} layout="fill" objectFit='scale-down'/>
        </div>       
    </StyledImageWindow>
  )
}

ImageWindow.defaultProps = { 
    imageUrl : defaultImage,
    variant : "sunglow"
}
export default ImageWindow