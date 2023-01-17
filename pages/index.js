import { Main } from "../shared/styles/sharedStyles"
import { Button } from "../shared/inputs/styles"
import { HStack, VStack, Title, Description } from "../shared/styles/sharedStyles"
import { NavLink } from "../components/Navbar/styles"
import { WELCOMING_TEXT } from "../shared/data/constants"

export default function Home() {
  return (
    <Main>
      <HStack>
        <VStack width="50%" widthMobile="95%" >
          <Title>Welcome to Carbon Estimator</Title>
          <Description>
            {WELCOMING_TEXT}
          </Description>
          <NavLink href="/estimate">
          <Button height="50px">Get Started</Button>
          </NavLink>
        </VStack>
      </HStack>
    </Main>
  )
}
