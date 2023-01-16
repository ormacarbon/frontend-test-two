import { atom } from "recoil";

export const listaDeReceitas = atom({
    key: 'listaDeReceitas',
    default: [
        {
            title: 'comida1',
            id: 1,
            image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            instructions: '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut eum corrupti, officiis dolorum numquam esse ratione, fugit cum magni corporis incidunt iure tempora sapiente. Magnam quae dolorum sint facere.</p>'
        },
        {
            title: 'comida2',
            id: 2,
            image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            instructions: '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut eum corrupti, officiis dolorum numquam esse ratione, fugit cum magni corporis incidunt iure tempora sapiente. Magnam quae dolorum sint facere.</p>'
        },
        {
            title: 'comida3',
            id: 3,
            image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

            instructions: '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut eum corrupti, officiis dolorum numquam esse ratione, fugit cum magni corporis incidunt iure tempora sapiente. Magnam quae dolorum sint facere.</p>'
        },
        {
            title: 'comida4',
            id: 4,
            image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

            instructions: '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut eum corrupti, officiis dolorum numquam esse ratione, fugit cum magni corporis incidunt iure tempora sapiente. Magnam quae dolorum sint facere.</p>'
        },
        {
            title: 'comida5',
            id: 5,
            image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

            instructions: '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut eum corrupti, officiis dolorum numquam esse ratione, fugit cum magni corporis incidunt iure tempora sapiente. Magnam quae dolorum sint facere.</p>'
        },
        {
            title: 'comida6',
            id: 6,
            image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

            instructions: '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut eum corrupti, officiis dolorum numquam esse ratione, fugit cum magni corporis incidunt iure tempora sapiente. Magnam quae dolorum sint facere.</p>'
        }

    ]
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
