import styled from "styled-components"

const StyledHeader = styled.header`
padding: 0.1rem 1.5rem;
background-color: #00000099;

display : flex;
justify-content : space-between;
align-items:center ;

position: relative;

z-index: 10000;

width : min(81rem,100%);
margin : 1.5rem auto;

color : white;

nav{

    ul{
        list-style-type : none;
        display : flex;
        align-items: center;
        gap : 7rem;
        font-size: 1.53rem;
        font-weight : 500;
        .ellipses{
            padding: 1rem ;
            cursor: pointer;
            
            transition: all 0.2s ease-in-out ;
            &:hover{
            background-color:#222 ;
        }
        }

        a{
            transition: all 0.2s ease-in-out ;
            &:hover{
            color:#ccc ;
        }
        }
        
    }
}
`

export default StyledHeader