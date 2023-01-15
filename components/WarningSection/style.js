import styled from "styled-components";

export const WaningContainer = styled.div`
    padding: 10px;
    background-color: ${(props) => props.theme.colors.danger};
    width: 100%;
`

export const WarningText = styled.p`
    font-weight: 500;
    font-size: 12px;
    color: ${(props) => props.theme.colors.textSecondary};
`