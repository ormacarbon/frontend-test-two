import styled from "styled-components";

const HStack = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: ${(props) => props.wrap || "nowrap"};
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    margin: ${(props) => props.margin || "0"};
    padding: ${(props) => props.padding || "0"};
    align-items: ${(props) => props.align || "center"};
    justify-content: ${(props) => props.justify || "center"};
    border: ${(props) => props.border || "none"};

    @media (max-width: 768px) {
        width: ${(props) => props.widthMobile};
        justify-content: ${(props) => props.mobileJustify};
    }
`
const VStack = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: ${(props) => props.wrap || "nowrap"};
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    margin: ${(props) => props.margin || "0"};
    padding: ${(props) => props.padding || "0"};
    align-items: ${(props) => props.align || "center"};
    justify-content: ${(props) => props.justify || "center"};
    border: ${(props) => props.border || "none"};
    border-radius: ${(props) => props.borderRadius || "0"};
    background: ${(props) => props.background || "none"};
    
    * {
    color: ${(props) => props.color || "none"};
    }

    @media (max-width: 768px) {
        width: ${(props) => props.widthMobile};
        justify-content: ${(props) => props.mobileJustify};
        align-items: ${(props) => props.mobileAlign};
    }
`
const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;
`
const SectionTitle = styled.h2`
  line-height: 1.15;
  font-size: 1.5rem;
`


const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
  white-space: pre-line;
`
export { HStack, VStack, Container, Main, Title, SectionTitle, Description}