import styled from "styled-components"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    @media (max-width: 768px) {
        width: 100%;
    }
`

const Button = styled.button`
    width: ${props => props.width || "100%"};
    height: ${props => props.height || "auto"};
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 5px;
    font-size: large;
    cursor: pointer;
`

const Error = styled.p`
    color: red;
`

export { Form, Button, Error }
