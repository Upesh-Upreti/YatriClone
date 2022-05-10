import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
html{
  font-size: 62.5% ;
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Barlow', sans-serif;
  background-color: #000000;
}
body{
  font-size: 1.5rem ;
}
a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
input{
  border: 0.1rem solid black;
  
}

`;
 
export default GlobalStyle;
