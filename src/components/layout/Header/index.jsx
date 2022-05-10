import Image from "next/image"
import logo from "../../../assets/images/logo.png"
import Link from "next/link"
import StyledHeader from "./styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faEllipsisV,faTimes } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import styled from 'styled-components';

const index = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StyledHeader>
        <Link href={"/"}><a><Image src={logo} width={64} height={16} objectFit="scale-down" alt={"Yatri Logo"}/></a></Link>
        <nav>
            <ul>
                <li><Link href="/project-zero"><a>PROJECT ZERO</a></Link></li>
                <li><Link href="/project-one"><a>PROJECT ONE</a></Link></li>
                <li><Link href="/vision"><a>VISION</a></Link></li>
                <li><FontAwesomeIcon icon={faEllipsisV} onClick = { () => setShowMenu(!showMenu)} className="ellipses"/></li>
            </ul>
        </nav>
        {showMenu && <Menu setShowMenu = {setShowMenu} />}
    </StyledHeader>
  )
}

const Menu = ({setShowMenu}) => {
  return(
    <StyledMenu>
      <div className="container">
      <Link href={"/"}><a><Image src={logo} width={144} height={34} objectFit="scale-down" alt={"Yatri Logo"}/></a></Link>
      <FontAwesomeIcon icon={faTimes} className="x-btn" size="2x" onClick={() => setShowMenu(false)}/>
      <p><Link href="/project-zero"><a>PROJECT ZERO</a></Link></p>
      <p><Link href="/project-one"><a>PROJECT ONE</a></Link></p>
      <p><Link href="/vision"><a>VISION</a></Link></p>
      </div>
    </StyledMenu>
  )
}

const StyledMenu = styled.div`
  position: fixed;
  top:0;
  left:0;

  z-index: 1000;

  width: 100%;
  height: 100vh;

  background-color: #000 ;
  p a{
    display:inline-block ;
    margin: 1.5rem 0;
    font-size: 4rem ;
    transition: all 0.3s ease-in-out ;

    &:hover{
      color: #0cc;
    }
  }
  

  color: #fff;

  .container{

    position: relative;
    max-width: 90rem ;
    margin:auto;

    margin-top: 6rem ;

    .x-btn{
    position: absolute;
    right: 2rem;
    top:0;
    z-index:1001;

    transition: all 0.3s ease-in-out ;

    cursor: pointer;

    &:hover{
      transform:rotate(90deg) ;
    }
  }
  }

  
`

export default index