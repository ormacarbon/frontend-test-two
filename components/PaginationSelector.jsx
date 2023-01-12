import styled from "styled-components";

const PaginationSelector = ({itensPerPage, setItensPerPage}) => {
return (
  <>
          <Paragraphy>Items per page:</Paragraphy>
    <PaginationContainer
          value={itensPerPage}
          onChange={(e) => setItensPerPage(Number(e.target.value))}
          >
          
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
        </PaginationContainer>
          </>
)
}

export default PaginationSelector;


const PaginationContainer = styled.select`
display: flex;
position: relative;
padding: 1px;
border: none;
outline: none;
text-decoration: underline;
color: ${props => props.theme.color}; 
`

  const Paragraphy = styled.p `
  font-family: Helvetica;
  font-size: 16px;
  margin-right: 10px;
  text-decoration: underline;
  color: ${props => props.theme.color};
  `