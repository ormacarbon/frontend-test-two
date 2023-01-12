import React, { useEffect, useMemo, useState } from 'react'
import { Input } from '../../Components/SearchComponent/styles'
import {useApi} from '../../hooks/useApi'
import ExchangesList from '../../Components/Exchanges'
import { Container, ExchangesBox, InputBox } from './styles'
import debounce from 'lodash.debounce'
import LoaderComponent from "../../Components/Loader";
import SEO from '../../Components/SEO'

export default function Exchange() {
    const[search,setSearch]=useState('')
    const {response, isLoading} = useApi('exchanges')
    console.log(response)

    const handleChange = debounce(e => {
        e.preventDefault();
        setSearch(e.target.value.toLowerCase());
    }, 500);
    
    useEffect(() => {
        return () => handleChange.cancel();
    }, []);

     const filteredExchanges = useMemo(()=>response.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      ),[response,search])

  return (
    <main>
        <SEO name='Crypto.me | Exchanges' desc='all exchanges'/>
        <section id='exchanges'>
            <InputBox>
                <Input placeholder='Search your favorive exchange' onChange={handleChange}/>
            </InputBox>
            <Container>
            <ExchangesBox>
            {isLoading ? <LoaderComponent/> : filteredExchanges.map(broker=>(
                <ExchangesList
                    key={broker.id}
                    id={broker.id}
                    image={broker.image}
                    name={broker.name}
                    trustRank={broker.trust_score}
                    trustScore={broker.trust_score_rank}
                    url={broker.url}
                />
            ))}
            </ExchangesBox>
            </Container>
        </section>
    </main>
  )
}
