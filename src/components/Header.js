import Link from "next/link"

const linksMenu = [
  {name: 'Home', page: '/'},
  {name: 'Air Pollution', page: '/airpollution'},
  {name: 'Forecast', page: '/forecast'},
  {name: 'Collaborators', page: '/collaborators'},
]

const Header = () => {
  return (
    <header>
      <div className="logo">OrmaCarbon</div>
      <nav>
        <ul>
          {linksMenu.map(linkItems => (
            <Link href={linkItems.page}>{linkItems.name}</Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header