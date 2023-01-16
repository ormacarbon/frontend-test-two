import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import styled, {ThemeProvider} from "styled-components"
import Button from "../../src/components/Button/Button"
import Footer from "../../src/components/Footer/Footer"
import Header from "../../src/components/Header/Header"
import Recipe from "../../src/components/Recipe/Recipe"
import { listaDeReceitas, savedRecipesState } from "../../src/state/atom"
import { themeLightMode } from "../../src/theme/theme"

export default function RecipePage() {
	const router = useRouter()
	const { id } = router.query
	const recipeList = useRecoilValue(listaDeReceitas)
	const setSaveRecipe = useSetRecoilState(savedRecipesState)
	const savedRecipes = useRecoilValue(savedRecipesState)
	const index = recipeList.findIndex(item => item.id == id)
	console.log(savedRecipes)

	return (
		<div>
			<Header />
			<ThemeProvider theme={themeLightMode}>
			<StyledRandomRecipe>
				<Recipe
					image={recipeList[index].image}
					title={recipeList[index].title}
					ingredients={recipeList[index].extendedIngredients}
					instructions={recipeList[index].instructions}
				/>

				{/*<div className="ingredients">
					<h3>
						Ingredients
					</h3>
					<ul>
						{recipe[randomNum].extendedIngredients.map(ingredient => (
							<li>
								{`${ingredient.amount} ${ingredient.name}`}
							</li>
						))}
					</ul>
                        </div>*/}

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
}



`