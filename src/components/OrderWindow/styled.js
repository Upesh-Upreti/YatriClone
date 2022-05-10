import styled from 'styled-components';

const StyledOrderWindow = styled.div `

    padding: 1.5rem;

`
const FormField = styled.div `

    margin-bottom: 1rem ;

    text-align: center ;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

    label{
        margin-bottom: 0.5rem ;
        display: block ;

        font-size: 2rem ;
    }

    input{

        width: 100%;

        padding: 1rem ;
    }

`

const ColorSelector = styled.div `

    position: relative ;

    display: inline-block ;

    width: ${props => props.active ? "3.5rem" : "2.5rem"} ;

    margin: 0.8rem ;
    aspect-ratio: 1;

    border-radius: 50% ;
    background-color: ${props => props.bikeColor}; 

    cursor: pointer;

    border: 0.1rem solid #ccc ;

    &::after{
        position: absolute ;
        top: 50%;
        left: 50%;

        content: "";

        width: ${props => props.active ? "3.8rem" : "2.8rem"};
        aspect-ratio: 1;

        transform: translate(-50%,-50%) ;

        border-radius: 50%;

        border: 0.2rem solid ${props => props.bikeColor};
    }
`

export default StyledOrderWindow

export {
    FormField,
    ColorSelector
}