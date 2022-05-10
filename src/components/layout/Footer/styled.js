import styled from "styled-components"

const StyledFooter = styled.footer`

color: #ddd ;
padding: 1.5rem;

.quick-links{
    display: flex;
    gap: 3.5rem;
    align-items: center ;
}

.social-media{
    display : flex;
    justify-content : space-between;
}
.social-media-icons{
    display: flex ;
    justify-content: center ;
    gap: 2rem;
    font-size: 1.7rem;
}

a{
    transition: all 0.3s ease-in-out;
    &:hover{
    color: #aaa;

}
}

.newsletter{
    display: flex ;
    justify-content: space-between;
.col-one{
    p{
        &:first-child{
            font-weight: bold ;
            font-size: 1.53rem ;
        }
    }
}
.col-two{
    input{
        width:34.7rem ;

        padding: 1rem;
        border: 0.1rem solid #00cccc ;
    }
    button{
        margin-left: 1rem ;
        width:15.3rem ;

        padding:1rem ;
        background-color: #00cccc ;
        color: #fff ;

        font-weight: 700;

        border: 0.1rem solid #00cccc ;
    }
}
}

`
export default StyledFooter