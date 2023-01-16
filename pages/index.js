import { Main } from "../shared/styles/sharedStyles"
import { Button } from "../shared/inputs/styles"
import { HStack, VStack, Title, Description } from "../shared/styles/sharedStyles"
import { NavLink } from "../components/Navbar/styles"

export default function Home() {
  return (
    <Main>
      <HStack>
        <VStack width="50%" widthMobile="95%" >
          <Title>Welcome to Carbon Estimator</Title>
          <Description>
            Using this web app, you'll be able to easily estimate the carbon footprint in your region by inputting information about your daily activities, transportation, energy usage, and many other categorized options.
            <br />
            <br />
            We'll then use the cutting edge Climatiq API to fetch data and calculate your footprint in real-time.
            <br />
            <br />
            Currently, the MVP (minimun viable product) version of the app only includes basic functionality, but stay tuned as more features and options will be added very soon to help you get more informed about your carbon emissions in your surroundings.
          </Description>
          <NavLink href="/estimate">
          <Button height="50px">Get Started</Button>
          </NavLink>
        </VStack>
      </HStack>
    </Main>
  )
}
