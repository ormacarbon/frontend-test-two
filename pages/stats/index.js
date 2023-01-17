import { useState, useEffect, useRef } from "react"
import { Rings } from "react-loader-spinner"
import { useForm } from "react-hook-form"
import ReactFlagsSelect from "react-flags-select"
import { Form, Button } from "../../shared/inputs/styles"
import { Main, HStack, VStack } from "../../shared/styles/sharedStyles"
import { Itemlist, Item } from "../../components/InfoCard/styles"
import { LAST_YEAR } from "../../shared/data/constants"
import { search } from "../../shared/services/api"
import CollectionView from "../../components/Collection View"
import InfoCard from "../../components/InfoCard"
import YearInput from "../../shared/inputs/YearInput"
import useLocation from "../../hooks/useLocation"

export default function Stats() {
  
    const { countryCode, setCountryCode } = useLocation()
    const { register, handleSubmit } = useForm()
    const loadingRef = useRef(null)

    const [selected, setSelected] = useState(countryCode)
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedYear, setSelectedYear] = useState(LAST_YEAR)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [statsResults, setStatsResults] = useState([])

    const updateCountryCode = (code) => {
        setSelected(code)
        setCountryCode(code)
    }

    const onSubmit = async (content) => {
        setCurrentPage(1)
        setStatsResults([])
        setSelectedYear(content["year"])
    }

    const generateInfo = () => {
        return statsResults.map((result, index) => (
            <HStack key={index}>
                <Itemlist>
                    <Item> <small>Serivce name: <strong>{result["name"]}</strong></small> </Item>
                    <Item> <small>Catergory: <strong> {result["category"]}</strong></small></Item>
                    <Item> <small>Source: <strong>{result["source"]} </strong></small></Item>
                </Itemlist>
                <VStack>
                    <small>CO2 emission</small>
                    <strong>{result["factor"]}</strong>
                    <strong>{result["unit"]}</strong>
                </VStack>
            </HStack>
        ))
    }

    useEffect(() => {

        const getStats = async () => {
            try {
                const response = await search({
                    query:
                    {
                        region: countryCode || "US",
                        page: currentPage,
                        results_per_page: 15,
                        year: selectedYear
                    }
                }
                )
                setStatsResults([...statsResults, ...response["results"]])
                setCurrentPage(currentPage + 1)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }

        // Fetch initial data
        getStats()

        // Add scroll listener
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loading) {
                setLoading(true)
                getStats()
            }
        })
        observer.observe(loadingRef.current)

        // Remove scroll listener
        return () => {
            observer.disconnect()
        }

    }, [loading, selectedYear, countryCode])


    return (
        <Main>
            <HStack
                wrap="wrap"
                justify="center"
                align="flex-start">
                <Form
                    onSubmit={handleSubmit(onSubmit)}>
                    <YearInput
                        register={register} />
                    <ReactFlagsSelect
                        selected={selected}
                        onSelect={updateCountryCode}
                        fullWidth
                    />
                    <Button
                        type='submit'
                        disabled={loading}>
                        Search
                    </Button>
                </Form>

                <CollectionView
                    title={`Emissions in ${selectedYear}`}
                    items={generateInfo()}
                    renderItem={InfoCard}
                />
                {error && <strong>No data available for the current search </strong>}
            </HStack>
            {loading && <Rings color="black" />}
            <div ref={loadingRef} className="loading-indicator"></div>
        </Main>
    )
}
