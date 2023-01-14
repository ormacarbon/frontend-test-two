import Link from "next/link"
import * as C from './style'

const linksMenu = [
  {name: 'Home', page: '/'},
  {name: 'Air Pollution', page: '/airpollution'},
  {name: 'Forecast', page: '/forecast'},
  {name: 'Collaborators', page: '/collaborators'},
]

const Header = () => {
  return (
    <C.ContainerHeader>
      <C.HeaderNavigation>
        <Link href='/' className="logo">OrmaCarbon</Link>
        <C.ListItems>
          {linksMenu.map(linkItems => (
            <Link href={linkItems.page}>{linkItems.name}</Link>
          ))}
        </C.ListItems>
      </C.HeaderNavigation>
      
    </C.ContainerHeader>
  )
}

export default Header