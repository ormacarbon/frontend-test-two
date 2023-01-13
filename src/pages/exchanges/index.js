import React, { useEffect, useMemo, useState } from 'react'
import { Input } from '../../Components/SearchComponent/styles'
import {useApi} from '../../hooks/useApi'
import ExchangesList from '../../Components/Exchanges'
import { Container, ExchangesBox, InputBox } from './styles'
import debounce from 'lodash.debounce'
import LoaderComponent from "../../Components/Loader";
import SEO from '../../Components/SEO'
import Pagination from '../../Components/Pagination'

export default function Exchange() {
    const[search,setSearch]=useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 15

    const {response, isLoading,refresh} = useApi('exchanges')

    const handleSearch = debounce(e => {
        e.preventDefault();
        setSearch(e.target.value.toLowerCase());
    }, 500);
    
    useEffect(() => {
        return () => handleSearch.cancel();
    }, []);

    useEffect(() => {
        const intervalId = setTimeout(() => {
          refresh(url);
        }, 300000);
        return () => clearInterval(intervalId);
      }, [refresh]);

     const filteredExchanges = useMemo(()=>response.filter(exchange =>
        exchange.name.toLowerCase().includes(search.toLowerCase())
      ),[response,search])

      const totalPages = Math.ceil(filteredExchanges.length / perPage);

      const handlePageChange = (page) => {
        if (page < 1) {
          setCurrentPage(1);
        } else if (page > totalPages) {
          setCurrentPage(totalPages);
        } else {
          setCurrentPage(page);
        }
    }
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const currentPageExchanges = filteredExchanges.slice(startIndex, endIndex);

  return (
    <main>
        <SEO name='Crypto.me | Exchanges' desc='all exchanges'/>
        <section id='exchanges'>
            <InputBox>
                <Input placeholder='Search your favorive exchange' onChange={handleSearch}/>
            </InputBox>
            <Pagination
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
            />
            <Container>
            <ExchangesBox>
            {isLoading ? <LoaderComponent/> : currentPageExchanges.map(broker=>(
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
