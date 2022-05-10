import styled from 'styled-components';

const StyledCalculator = styled.div`
 color: #fff ;
 font-size: 2rem;

 text-align:left ;

 max-width: 91rem;
 margin: auto;

 input{
    font-size: 1.4rem; 
    width: 5.2rem; 
    height:3.2rem ;

    padding: 0.1rem 0.2rem;
    text-align:center ;

    background-color: #262626 ;

    color: #fff;

 }
 label{
     margin-left: 5rem ;
 }

 span.red{
    color: #c00;
 }

 span.blue{
    color: #0cc;
 }

 table, tbody{
     width: 100%;

     text-align: center;
     th{
         font-size: 1.7rem;
     }
     td{
        width: 33.33% ;
        input[type="range"]{
            width: 90%;
            margin: auto;
        }
     }
 }

 .title{
     font-size: 1.54rem ;
     color: #737373;
     text-align:left ;
 }
`

const GlowingHeading = styled.h2`
     
     font-size: 2.4rem;
     font-weight: 600 ;

     text-shadow: #fff 0 0 0.4rem;
 
`

export default StyledCalculator
export {GlowingHeading}