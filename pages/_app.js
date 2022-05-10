import GlobalStyle from "../styles/globalStyles"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
     
      <Component {...pageProps} />
    
    </>
  )
  
}

export default MyApp
