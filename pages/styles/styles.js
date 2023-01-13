import styled from 'styled-components'

export const Container = styled.div`
display: flex;
font-family: 'Montserrat';
flex-direction: column;
justify-content: space-between;
height: 100vh;

@media(min-width: 875px) {
   display: flex;
   flex-direction: column;
}
`;

export const Text = styled.h1`
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
margin-left: 50px;
padding: 10px;
color: #c3c3cc;
`;

export const Top = styled.header`
padding: 10px;
display: flex;
align-items: center;
background: linear-gradient(90deg, rgba(132,131,149,1) 0%, rgba(31,31,34,1) 35%, rgba(72,79,80,1) 100%);
height: 52px;
`;

export const Middle = styled.section`
background: linear-gradient(90deg, rgba(195,195,204,1) 0%, rgba(143,143,143,1) 35%, rgba(133,133,133,1) 100%);
  display: flex;
  flex-direction: column;
  padding: 40px;
  height: calc(100vh - 148px);
  gap: 40px;

  img {
   border-radius: 50%;
   width: 100px;
  }

  @media(min-width: 875px) {
   display: flex;
   flex-direction: column;
}
`;

export const Message = styled.div`
margin-top: 100px;
margin-left: 50px;
width: 800px;
font-size: 30px;
color: gainsboro;

h2, span {
   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
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
