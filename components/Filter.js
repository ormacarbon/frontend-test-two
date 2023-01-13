import { GlobalFilter, FilterTitle, FilterHeader, FilterMain, InputSearch, OrderTitle, InputSelect} from '../styles/FilterStyles'

import Image from 'next/image'

export default function Filter(props) {
    return (
        <>
        <GlobalFilter>
            <FilterHeader>
                <Image src='/images/iconfilter.png' width='32' height='32' alt="filter-icon" />
                <FilterTitle>Filter</FilterTitle>
            </FilterHeader>

            <FilterMain>
                <InputSearch placeholder="Search" />
                <OrderTitle>Order by:</OrderTitle>
                <InputSelect >
                    <option value="">Name</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                </InputSelect>
                <InputSelect  >
                    <option >Price</option>
                    <option >Highest</option>
                    <option >Lowest</option>
                </InputSelect>
            </FilterMain>
            </GlobalFilter>
        </>
    )
}