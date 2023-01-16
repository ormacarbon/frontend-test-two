import { useRouter } from "next/router"
import { useEffect } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import styled from "styled-components"
import Footer from "../../src/components/Footer/Footer"
import Header from "../../src/components/Header/Header"
import RecepieCard from "../../src/components/RecepeCard/RecepeCard"
import { searchResults, themeSwitchState } from "../../src/state/atom"

export default function SearchItem() {
    const lightSwitchState = useRecoilValue(themeSwitchState)
	const lightSwitch = useSetRecoilState(themeSwitchState)
    const router = useRouter()
    const { id } = router.query
    const results = useRecoilValue(searchResults)

    useEffect(() => {
        const darkMode = localStorage.getItem('darkMode')
		if(darkMode == 'on'){
			lightSwitch(lightSwitchState == true ? !lightSwitchState : lightSwitchState)
		  }else{
			lightSwitch(true)
		  }
	},[])
    
    return (
        <div>
            <Header />
            <StyledResults>
                <h2> Results for: {id} </h2>
                <div className="results-container">
                    {results.map(recipe => (
                        <div className="results__card-container" key={recipe.id}>
                            <RecepieCard
                                title={recipe.title}
                                img={recipe.image}
                                to={`/recipe/${recipe.id}`}
                            />
                        </div>
                    ))}
                </div>
            </StyledResults>
            <Footer />
        </div>
    )
}

const StyledResults = styled.section`

margin: 1rem auto;
width: 80%;
padding: 1rem;
min-height: 70vh;

h2{
    margin: 2rem 0;
}

.results-container{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 30px;

    .results__card-container{
        width: 400px;
        height: 300px;
    }
}


`