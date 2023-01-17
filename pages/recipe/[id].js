import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import styled, {ThemeProvider} from "styled-components"
import Button from "../../src/components/Button/Button"
import Footer from "../../src/components/Footer/Footer"
import Header from "../../src/components/Header/Header"
import Recipe from "../../src/components/Recipe/Recipe"
import { listaDeReceitas, savedRecipesState, themeSwitchState } from "../../src/state/atom"
import { themeDarkMode, themeLightMode } from "../../src/theme/theme"

export default function RecipePage() {
	const lightSwitchState = useRecoilValue(themeSwitchState)
	const lightSwitch = useSetRecoilState(themeSwitchState)

	const router = useRouter()
	const { id } = router.query
	const recipeList = useRecoilValue(listaDeReceitas)
	const setSaveRecipe = useSetRecoilState(savedRecipesState)
	const savedRecipes = useRecoilValue(savedRecipesState)
	const index = recipeList.findIndex(item => item.id == id)
	console.log(savedRecipes)

	useEffect(() => {
		const darkMode = localStorage.getItem('darkMode')
		if(darkMode == 'on'){
			lightSwitch(lightSwitchState == true ? !lightSwitchState : lightSwitchState)
		  }else{
			lightSwitch(true)
		  }
			lightSwitch(lightSwitchState == true ? !lightSwitchState : lightSwitchState)
		},[lightSwitch, lightSwitchState])

	return (
		<div>
			<Header />
			<ThemeProvider theme={lightSwitchState == true? themeLightMode: themeDarkMode}>
			<StyledRandomRecipe>
				<Recipe
					image={recipeList[index] && recipeList[index].image}
					title={recipeList[index] && recipeList[index].title}
					ingredients={recipeList[index] && recipeList[index].extendedIngredients}
					instructions={recipeList[index] && recipeList[index].instructions}
				/>

				<div className="ingredients">
					<h3>
						Ingredients
					</h3>
					<ul>
						{recipeList[index] && recipeList[index].extendedIngredients.map(ingredient => (
							<li key={ingredient.id}>
								{`${ingredient.amount} ${ingredient.name}`}
							</li>
						))}
					</ul>
                    </div>

				<Button
					text='Save Recipe'
					size= {300}
					m={2}
					onClick={() => {
						const newList = [...savedRecipes];
						newList.push(recipeList[index]);
						setSaveRecipe(newList);
						localStorage.setItem('savedrecipes', JSON.stringify(newList));
						alert('recipe saved');
					}}
				/>

			</StyledRandomRecipe>
			</ThemeProvider>
			<Footer />
		</div>
	)
}

const StyledRandomRecipe = styled.section`

margin: 3rem 0;
padding: 1rem;
min-height: 70vh;
width: 80%;
margin: 3rem auto;
text-align: center;
.ingredients{
	margin-top: 3rem;
	text-align: justify;
	color: ${(p) => p.theme.colors.fontColor};
}



`