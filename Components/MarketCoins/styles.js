import styled from "styled-components";

export const TableCoins = styled.div`
    width: 100%;
    max-width: 1500px;
    margin: auto;
    .text{
        width: 100%;
        max-width: 800px;
        margin: auto;
    }
   
` 
export const Container = styled.div`

`
export const CoinContainer = styled.div`
 width: 100%;
 padding: 2rem;
 border-bottom: 1px solid ${props=>props.theme.borderColor};
ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
export const TableCoinsContainer = styled.div`
     max-width: 800px;
    margin: auto;
    border-radius:1rem;
    background-color: ${props=>props.theme.primaryBack};
`