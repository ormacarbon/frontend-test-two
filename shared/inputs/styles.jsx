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
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #ccc;
    cursor: pointer;
`

const Error = styled.p`
    color: red;
`

export { Form, Button, Error }
