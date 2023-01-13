import styled from "styled-components"
import Link from "next/link"

const CategoryBody = styled(Link)`
   width: 150px;
   height: 60px;
   border-radius: 5px;
   border: 1px solid;
   text-decoration: none;
   margin: 5px;

   svg {
    width: 30px;
    height: 30px;   
    }

    @media (max-width: 768px) {
         width: 100px;
         height: 40px;
    }
   `

const Title = styled.h6`
   font-size: medium;
   font-weight: 100;
`

export { CategoryBody, Title }
