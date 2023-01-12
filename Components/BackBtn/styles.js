import styled from "styled-components";

export const LinkContainer = styled.div`
     .back{
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: 1.4rem;
            color: ${props=>props.theme.primary};
            :hover{
                text-decoration: underline;
            }
        }
`