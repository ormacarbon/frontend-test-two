import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="nav">
      <ul>
        <li className="home"><Link href="/">Home</Link></li>
        <li className="tutorials"><Link className="active" href="/dog">Dog</Link></li>
        <li className="about"><Link href="/cat">Cat</Link></li>
      </ul>
    </div>
  );
}