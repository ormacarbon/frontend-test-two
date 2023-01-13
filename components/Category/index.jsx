import { CategoryBody, Title } from "./styles"
import { HStack } from "../../shared/styles/sharedStyles"

const Category = ({ title, icon }) => {
    return (
        <CategoryBody
            href={`/estimate/${title}`}>
            <HStack
                justify="space-evenly" >
                {icon}
                <Title>{title}</Title>
            </HStack>
        </CategoryBody>
    )
}

export default Category