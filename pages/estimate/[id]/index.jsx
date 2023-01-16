import { Form, Button } from "../../../shared/inputs/styles"
import { Main } from "../../../shared/styles/sharedStyles"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import { HStack } from "../../../shared/styles/sharedStyles"
import { estimate } from "../../../shared/services/api"
import { useState } from "react"
import { Rings } from "react-loader-spinner"
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

    const queryBuilder = {
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
            emission_factor: queryBuilder[id].emission_factor,
            parameters: {...content, ...queryBuilder[id].parameters}
        }

        try{
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

    return (
        <Main>
            <HStack wrap="wrap" justify="center">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {renderInputs[id]}
                    <Button type='submit'>{loading ? "Loading" : "Estimate"}</Button>
                </Form>
                {loading && <Rings color="#000" height={100} width={100} />}
                {!error && estimatedData && <InfoCard data={estimatedData} />}
                {error &&  <strong>No data available for the chosen region</strong>}
            </HStack>
        </Main>
    );
}

export default EstimatePage