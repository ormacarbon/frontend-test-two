import { CategoryBody, Title } from "./styles"
import { HStack } from "../../shared/styles/sharedStyles"

const Category = ({ title, icon, href }) => {
    return (
        <CategoryBody
            href={`/estimate/${href}`}>
            <HStack
                justify="space-evenly" >
                {icon}
                <Title>{title}</Title>
            </HStack>
        </CategoryBody>
    )
}

export default Category