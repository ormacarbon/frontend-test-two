import React from 'react'
import {MobileMenu,NavigationMobile} from './styles'
import Link from 'next/link'

export default function MobileMenuComponent() {
  return (
    <MobileMenu>
        <NavigationMobile>
          <ul>
            <li>
              <Link href="/">Coins</Link>
            </li>
            <li>
              <Link href="/exchanges">Exchanges</Link>
            </li>
            <li>
              <Link href="/companies">Companies</Link>
            </li>
          </ul>
        </NavigationMobile>
      </MobileMenu>
  )
}
