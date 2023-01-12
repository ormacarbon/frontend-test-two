import React, { useState } from 'react'
import { Input } from '../../Components/SearchComponent/styles'
import {useApi} from '../../hooks/useApi'
import ExchangesList from '../../Components/Exchanges'
import { Container, ExchangesBox, InputBox } from './styles'

export default function Exchange() {
    const[search,setSearch]=useState('')
    const {response} = useApi('exchanges')
    console.log(response)

    const handleChange = e => {
        e.preventDefault();
        setSearch(e.target.value.toLowerCase());
      };
     const filteredExchanges = response.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <main>
        <section id='exchanges'>
            <InputBox>
                <Input placeholder='Search your favorive exchange' onChange={handleChange}/>
            </InputBox>
            <Container>
            <ExchangesBox>
            {filteredExchanges.map(broker=>(
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
