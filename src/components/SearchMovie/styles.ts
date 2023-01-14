import styled from "styled-components";

export const Container = styled.form`
width: 300px;
display: flex;
flex-direction: column;
gap: 1rem;

@media (max-width: 768px){
    width: 100%;
}
`

export const Input = styled.input`
width: 100%;
padding: 1rem;
color: ${props => props.theme.colors.green500};
background-color: ${props => props.theme.colors.primary100};
border: 1px solid ${props => props.theme.colors.primary100};
font-size: 1.15rem;
border-radius: 10px;
&::placeholder{
    color: ${props => props.theme.colors.green500};
}
&:focus{
    outline: 0;
}
`