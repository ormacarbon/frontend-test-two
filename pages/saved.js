import styled, { ThemeProvider } from "styled-components"
import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import RecepieCard from '../src/components/RecepeCard/RecepeCard'
import { themeLightMode } from "../src/theme/theme"
import { useEffect } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { savedRecipesState, themeSwitchState } from "../src/state/atom"
import Button from "../src/components/Button/Button"

export default function SavedRecipes() {
	const setSavedRecipe = useSetRecoilState(savedRecipesState)
	const savedRecipes = useRecoilValue(savedRecipesState)
	const lightSwitchState = useRecoilValue(themeSwitchState)
	const lightSwitch = useSetRecoilState(themeSwitchState)
	useEffect(() => {
		const darkMode = localStorage.getItem('darkMode')
		setSavedRecipe(JSON.parse(localStorage.getItem('savedrecipes')))
		if(darkMode == 'on'){
			lightSwitch(lightSwitchState == true ? !lightSwitchState : lightSwitchState)
		  }else{
			lightSwitch(true)
		  }
	}, [])
	console.log(savedRecipes);
	return (
		<div>
			<Header />
			<ThemeProvider theme={themeLightMode}>
				<StyledSavedRecipes>
					<h2>My recipes</h2>
					<div className="grid-container">
						{savedRecipes != null ? savedRecipes.map((recipe,index) => (
							<div className="grid-item" key={index}>
								<RecepieCard
									title={recipe.title}
									img={recipe.image}
									to={`/recipe/${recipe.id}`}
								/>
								<Button
								m={2}
								text='Remove Recipe'
								size={200}
								onClick={() => {
									const newlist = [...savedRecipes];
									const index = newlist.findIndex(item => item.id == recipe.id)
									newlist.splice(index, 1)
									setSavedRecipe(newlist)
									localStorage.setItem('savedrecipes', JSON.stringify(savedRecipes))
								}}
								/>
							</div>
						)) : <p> 0 recipes saved</p>}
					</div>
				</StyledSavedRecipes>
			</ThemeProvider>
			<Footer />
		</div>
	)
}

const StyledSavedRecipes = styled.section`
width: 80%;
min-height: 75vh;
margin: 1rem auto;
padding: 1rem;
h2{
	margin: 2rem 0;
}
.grid-container{
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-items: center;
	align-items: center;
	margin-bottom: 3rem;

	.grid-item{
		width: 70%;
		height: 300px;
		text-align: center;
		margin: 4rem 0;
	}
}

@media screen and (max-width: 769px) {
	.grid-container{
		grid-template-columns: 1fr;
	}
}

@media screen and (max-width: 430px) {
	.grid-container{
		.grid-item{
			width: 100%;
			height: 200px;
		}
	}
}
`