import Link from 'next/link'
import React from 'react'
import { Header, Navigation } from './styles'

export const HeaderComponent = () => {
  return (
    <Header>
        <h3>Logo</h3>

        <Navigation>
            <ul>
                <li><Link href='/'>Coins</Link></li>
                <li><Link href='/'>Exchange</Link></li>
                <li><Link href='/'>Derivatives</Link></li>
                <li><Link href='/'>Nfts</Link></li>
            </ul>
            <button>TEMa</button>
        </Navigation>
    </Header>
  )
}
