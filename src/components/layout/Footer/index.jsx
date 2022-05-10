import { faYoutube,faInstagram,faTwitter,faLinkedinIn,faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import StyledFooter from "./styled"
import Link from "next/link"

const Footer = () => {
  return (
    <StyledFooter>
        <div className="newsletter">
            <div className="col-one">
                <p>GET OUR NEWSLETTER</p>
                <p>Be the first to receive the latest Yatri Motorcycles news, events and product updates and more.</p>
            </div>
            <div className="col-two">
                <form>
                    <input type="email" placeholder="Your email here."/>
                    <button type="submit">SUBSCRIBE</button>
                </form>
            </div>
        </div>
        <div className="social-media">
            <div className="quick-links">
                <p>YATRI MOTORCYCLES © 2022</p>
                <Link href="/"><a>Careers</a></Link>  
                <Link href="/"><a>Legal</a></Link>
                <Link href="/"><a>Track Reservation</a></Link>
            </div>
            <div className="social-media-icons">
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /> </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
             </div>
        </div>      
    </StyledFooter>
  )
}

export default Footer