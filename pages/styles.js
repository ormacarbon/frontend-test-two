import styled from 'styled-components'

export const Container = styled.div`
display: flex;
font-family: 'Montserrat';
flex-direction: column;
justify-content: space-between;
height: 100vh;
`;

export const Text = styled.h1`
padding: 10px;
color: #ffff;
`;

export const Top = styled.header`
background: radial-gradient(circle, rgba(174,238,227,1) 9%, rgba(131,179,129,1) 93%);
height: 52px;
`;

export const Middle = styled.section`
 background-color: #e9fbf8;
  display: flex;
  padding: 40px;
  height: calc(100vh - 148px);
  gap: 40px;
`;

export const Bottom = styled(Top)`
 height: 96px;

 ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
 }

 li {
    color: #83b381;
 }

 li:hover {
  text-decoration: underline;
}
`;
