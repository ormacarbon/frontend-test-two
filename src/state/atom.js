import { atom } from "recoil";

export const listaDeReceitas = atom({
    key: 'listaDeReceitas',
    default: []
})

export const searchResults = atom({
    key: 'searchResults',
    default: []
})

export const savedRecipesState = atom({
    key: 'savedRecipesState',
    default: []
})

export const themeSwitchState = atom({
    key: 'themeState',
    default: true
})
