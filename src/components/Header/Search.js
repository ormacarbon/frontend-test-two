import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled, { ThemeProvider } from "styled-components"
import { searchResults, themeSwitchState } from '../../state/atom';
import { themeLightMode } from '../../theme/theme'

export default function SearchBar() {
    const [inputText, setInputText] = useState();
    const setResults = useSetRecoilState(searchResults)
    const lightSwitchState = useRecoilValue(themeSwitchState)
    const options = {
        method: 'GET',
        url: 'https://api.spoonacular.com/recipes/complexSearch?apiKey=b73fd94a241d457e8185de13a637ac03',
        params: {
            query: inputText
        },
        headers: {
            "Content-Type": "application/json"
        },
    };

    function searchData(){
        axios.request(options).then(function (response) {
            setResults(response.data.results);
            console.log(response.data);

        }).catch(function (error) {
            console.error(error);
        });
    }


    return (
        <ThemeProvider theme={themeLightMode}>
            <StyledSearch>
                <input 
                className="search" type="text"
                 placeholder="Search Recipes"
                 onChange={(e) => setInputText(e.target.value)}
                  />
                <button
                onClick={() => searchData()}
                 className='search-button'
                 >
                    <Link href={`/search/${inputText}`}>
                        <BsSearch />
                    </Link>
                </button>
            </StyledSearch>
        </ThemeProvider>

    )
}

const StyledSearch = styled.div`

display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 1rem;

.search{
background-color: transparent;
border-radius: 10px 0 0 10px;
border: 2px solid ${(p) => p.theme.colors.secondaryFontColor};
color: ${(p) => p.theme.colors.secondaryFontColor};
font-family: ${themeLightMode.typography.fontFamily}, sans-serif;
font-size: 1rem;
text-align: center;
padding: .3rem;
width: 70%;

&::placeholder{
    color: ${(p) => p.theme.colors.secondaryFontColor};
    font-family: ${themeLightMode.typography.fontFamily}, sans-serif;
    font-size: 1rem;
    opacity: 0.5;
   }
}

.search-button{
    background-color: transparent;
    border: 2px solid ${(p) => p.theme.colors.secondaryFontColor};
    border-left: none;
    border-radius: 0 10px 10px 0;
    padding: .3rem;
    font-size: 1.15rem;
    margin-left: 0rem;
    cursor: pointer;

    a{
        color: ${(p) => p.theme.colors.secondaryFontColor};
        &:hover{
        color: ${(p) => p.theme.colors.tertiaryColor};
        }
    }
}


`