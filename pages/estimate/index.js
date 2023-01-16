import { Main, HStack, SectionTitle } from "../../shared/styles/sharedStyles"
import { categories } from "../../shared/data/categories"
import Category from "../../components/Category"
import CollectionView from "../../components/Collection View"

export default function Estimate() {
  return (
    <Main>
      <HStack justify="flex-start" width="50%">
        <SectionTitle>Choose a item</SectionTitle>
      </HStack>
      {
        categories.map((category, index) => {
          return (
            <CollectionView
              key={index}
              renderItem={Category}
              title={category.name}
              items={category.items}
              color={category.color} />
          )
        }
        )}
      <HStack justify="flex-start" width="50%" margin="10px">
        <small>New categories coming soon</small>
      </HStack>
    </Main>
  )
}