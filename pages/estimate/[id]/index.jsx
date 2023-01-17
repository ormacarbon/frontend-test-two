import { Form, Button } from "../../../shared/inputs/styles"
import { Main, SectionTitle } from "../../../shared/styles/sharedStyles"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import { HStack } from "../../../shared/styles/sharedStyles"
import { estimate } from "../../../shared/services/api"
import { useState } from "react"
import { Rings } from "react-loader-spinner"
import { Itemlist, Item } from "../../../components/InfoCard/styles"
import EnergyInput from "../../../shared/inputs/EnergyInput"
import useLocation from "../../../hooks/useLocation"
import InfoCard from "../../../components/InfoCard"

const EstimatePage = () => {
    const router = useRouter()
    const { id } = router.query
    const { register, handleSubmit } = useForm()
    const { countryCode } = useLocation()

    const [estimatedData, setEstimatedData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const renderInputs = {
        "energy": <EnergyInput register={register} />,
    }

    const categoryParams = {
        "energy": {
            emission_factor: {
                id: "electricity-energy_source_grid_mix",
                region: countryCode || "US",
            },
            parameters: {
                energy_unit: "kWh",
            }
        }
    }

    const onSubmit = async (content) => {
        const data = {
            emission_factor: categoryParams[id].emission_factor,
            parameters: { ...content, ...categoryParams[id].parameters }
        }

        try {
            setLoading(true)
            const response = await estimate(data)
            setEstimatedData(response)
            setError(null)
        }
        catch (error) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }

    const generateInfoCard = () => {
        const emissionFactor = estimatedData["emission_factor"]
        const constituentGases = estimatedData["constituent_gases"]
        delete constituentGases["co2e_total"]
        return (

            <Itemlist>
                <li>Category: <span>{emissionFactor["category"]}</span></li>
                <li>Region: <span>{emissionFactor["region"]}, {emissionFactor["year"]}</span></li>
                <li>Source: <span>{emissionFactor["source"]}</span></li>

                <h3>Constintuent gases</h3>

                {
                    Object.keys(constituentGases).map((gas, index) => {
                        return (
                            constituentGases[gas] && <Item key={index}> <h3> {gas}</h3> <p>{constituentGases[gas]} {estimatedData["co2e_unit"]}</p></Item>
                        )
                    })
                }
            </Itemlist>

        )
    }

    return (
        <Main>
            <SectionTitle>Carbon estimation of {id} </SectionTitle>
            <HStack wrap="wrap" justify="center">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {renderInputs[id]}
                    <Button type='submit' disabled={loading}> Estimate </Button>
                </Form>
                {loading && <Rings color="#000" height={100} width={100} />}
                {!error && estimatedData && InfoCard(generateInfoCard())}
                {error && <strong>No data available for the chosen region</strong>}
            </HStack>
        </Main>
    );
}

export default EstimatePage