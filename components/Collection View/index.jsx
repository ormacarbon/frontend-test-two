import React from "react"
import { SectionTitle, VStack, HStack } from "../../shared/styles/sharedStyles"

function CollectionView ({ renderItem, items, title, color }) {
    return (
        <VStack
            align = "flex-start"
            widthMobile="90%"
            mobileAlign="flex-start"
            width="50%" 
            color={color}>
            <SectionTitle>{title}</SectionTitle> 
            <HStack
                justify = "flex-start" 
                wrap="wrap">
            {
             items.map((item, index) => 
                <React.Fragment key={index}>
                    {renderItem(item)}
                </React.Fragment>)
            }
            </HStack>

        </VStack>
    );
}


export default CollectionView;