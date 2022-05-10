import styled from 'styled-components';

const StyledFormProgress = styled.div `
    width: 21.5rem;
    display: flex ;

    color: #000;

    &>div{

        flex-basis: 33.33%;
        display: flex ;
        justify-content: center ;
        align-items: center;
        flex-direction: column ;
        color: grey ;

        span{
            width: 3rem ;
            height: 3rem;

            display: inline-block ;
            border : 0.2rem solid grey;
            border-radius: 50% ;

           
            display: flex ;
            justify-content: center ;
            align-items: center;

            margin-bottom: 0.5rem ;
        }

        &.active{
            color: #000;

            span{
                
                border-color: #000 ;
            }
        }
    }
    

`

const StatusWrapper = styled.div `

    display: flex ;
    justify-content: space-between;
    align-items: center;
    position:relative ;
    z-index:900 ;

    padding: 2rem ;

    border-top: 0.1rem solid #aaa ;

    gap: 1rem;

    .specification{

        border-bottom: 0.2rem solid #000 ;
        font-weight: 700 ;

        font-family: Arial, sans-serif;

        font-size: 1.7rem ;

        cursor: pointer;
    }
`

const ModalWrapper = styled.div `
width: 100vw ;
height:100vh;
overflow-y:scroll ;
position: fixed;
top:0;
left:0;
background-color:#aaaaa1a0 ;
z-index:999;

.modal{
    margin:auto ;
    width:min(90rem,100%);
    padding:3rem;
    background-color:#fff ;
    border-radius:0.5rem ;
    position:relative ;
    z-index:1000 ;

    .x-btn{
        position: absolute ;

        right: 2rem;
        top: 2rem;

        cursor: pointer;
    }


}
`


export {
    StyledFormProgress,
    StatusWrapper,
    ModalWrapper
}