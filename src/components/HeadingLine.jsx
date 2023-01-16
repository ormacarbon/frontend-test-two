import styled from 'styled-components';

const HeadingLineStyles = styled.div`
  border-bottom: 1px solid var(--reddark);  
  display: inline-block;
  margin: .75rem 0 1.75rem 0;
  width: 200px;
  
`

export function HeadingLine() {
  return <HeadingLineStyles />
}