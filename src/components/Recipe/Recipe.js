import { useRecoilValue } from "recoil"
import styled, { ThemeProvider } from "styled-components"
import { themeSwitchState } from "../../state/atom"
import { themeDarkMode, themeLightMode } from "../../theme/theme"

export default function Recipe(props) {
	const lightSwitchState = useRecoilValue(themeSwitchState)
	return (
		<ThemeProvider theme={lightSwitchState == true? themeLightMode: themeDarkMode}>
			<StyledRecipe>
				<div className="img" style={{
					backgroundImage: `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7)), url(${props.image})`
				}}></div>
				<h2>
					{props.title}
				</h2>
				<div className="instructions" dangerouslySetInnerHTML={{ __html: props.instructions }}>
				</div>
			</StyledRecipe>
		</ThemeProvider>
	)
}

const StyledRecipe = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${(p) => p.theme.colors.fontColor};
	h2{
		margin: 2rem 0;
		font-size: 3rem;
	}
.img{
	width: 70%;
	height: 400px;
	background-size: cover;
   	background-repeat: no-repeat;
   	background-position: center;
	border-radius: 10px;
	box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.7);
}

.instructions{
	width: 100%;
	text-align: justify;
	margin-bottom: 2rem;
}

@media screen and (max-width: 1024px) {
		h2{
			font-size: 2rem;
		}
	}

	@media screen and (max-width: 430px) {
		h2{
			font-size: 1rem;
		}
		.img{
			width: 100%;
			height: 300px;
		}
	}

`