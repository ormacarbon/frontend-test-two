import { Body, Itemlist, Item } from "./styles"
import { VStack } from "../../shared/styles/sharedStyles"


const InfoCard = ({ data }) => {
    const emissionFactor = data["emission_factor"]
    const constituentGases = data["constituent_gases"]
    delete constituentGases["co2e_total"]

    return (
        <Body>

            <Itemlist>
                <li>Category: <span>{emissionFactor["category"]}</span></li>
                <li>Region: <span>{emissionFactor["region"]}, {emissionFactor["year"]}</span></li>
                <li>Source: <span>{emissionFactor["source"]}</span></li>

                <h3>Constintuent gases</h3>

                <Item><h3>CO2e</h3> <p>{data["co2e"]} {data["co2e_unit"]}</p></Item>
                {
                    Object.keys(constituentGases).map((gas) => {
                        return (
                            constituentGases[gas] && <Item> <h3> {gas}</h3> <p>{constituentGases[gas]} {data["co2e_unit"]}</p></Item>
                        )
                    })
                }
            </Itemlist>

        </Body>
    )
}

export default InfoCard