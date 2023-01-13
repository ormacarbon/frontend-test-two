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
color: #c3c3cc;
`;

export const Top = styled.header`
display: flex;
align-items: center;
background: linear-gradient(90deg, rgba(132,131,149,1) 0%, rgba(31,31,34,1) 35%, rgba(72,79,80,1) 100%);
height: 52px;
`;

export const Middle = styled.section`
background: linear-gradient(90deg, rgba(195,195,204,1) 0%, rgba(143,143,143,1) 35%, rgba(133,133,133,1) 100%);
  display: flex;
  padding: 40px;
  height: calc(100vh - 148px);
  gap: 40px;
`;

export const Bottom = styled.footer`
background: linear-gradient(90deg, rgba(132,131,149,1) 0%, rgba(31,31,34,1) 35%, rgba(72,79,80,1) 100%);
 height: 96px;

 ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
 }


 li:hover {
  text-decoration: underline;
}

a, li {
   color: #c3c3cc;
   text-decoration: none;
}
`;
