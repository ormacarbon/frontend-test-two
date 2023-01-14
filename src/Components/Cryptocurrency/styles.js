import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    max-width: 800px;
    margin: auto;
    background-color: ${props=>props.theme.primaryBack};

    @media(max-width:1000px){
        max-width: 600px;
    }
    @media(max-width:650px){
        max-width: 450px;
    }
    @media(max-width:480px){
        width: 100%;
        max-width: 100%;
        margin: 0;
    }
`
export const CoinContainer = styled.div`
 padding: 2rem;
 border-bottom: 1px solid ${props=>props.theme.borderColor};
    @media(max-width:650px){
        width: 100%;
        max-width: 650px;
        margin: auto;
        overflow-x: scroll;
    }

ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media(max-width:650px){
        width: 450px;
        gap: 1rem;
    }
    @media(max-width:450px){
        width: 450px;
    }

}
span,li{
    color: ${props=>props.theme.text}
}

ul>li>img{
    width: 40px;
}
.box-coin{
    display: flex;
    align-items: center;
    span{
        font-size: 0.9rem;
        color: gray;
       
    }
}
.box-market{
    display: flex;
    flex-direction: column;
    span{
        font-weight: bolder;
    }
}
.text-green{
    color: green;
}
.text-red{
    color: red;
}
:hover{
    background-color: ${props=>props.theme.secondary};
    transition: 300ms;
}
`
