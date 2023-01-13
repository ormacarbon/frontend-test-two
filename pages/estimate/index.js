import { Main, } from "../../shared/styles/sharedStyles"
import { categories } from "../../shared/data/categories"
import Category from "../../components/Category"
import CollectionView from "../../components/Collection View"

export default function Estimate() {
  return (
    <Main>
      {
        categories.map((category, index) => {
          return (
            <CollectionView 
              key={index} 
              renderItem = {Category}
              title = {category.name}
              items = {category.items} 
              color = {category.color}/>
          )
      }
      )}
    </Main>
  )
}