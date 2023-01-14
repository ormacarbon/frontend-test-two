import styled from "styled-components";

export const CompaniesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
`

export const Table = styled.table`
    background-color: ${props=>props.theme.primaryBack};
`

export const Thead = styled.thead`
    background-color: ${props=>props.theme.primaryBack};
    color: ${props=>props.theme.primary};
    tr>th{
        padding: 1.3rem;
        border-bottom: 1px solid ${props=>props.theme.borderColor} ;
    }
`
export const Tbody = styled.tbody`
       background-color: ${props=>props.theme.primaryBack};
       text-align: center;
        tr>td{
            padding: 1rem;
            color: ${props=>props.theme.text};
            border-bottom: 1px solid ${props=>props.theme.borderColor} ;
        }
`