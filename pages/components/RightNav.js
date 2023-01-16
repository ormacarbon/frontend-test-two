import Link from 'next/link';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 2;

  li {
    padding: 18px 10px;
  }
  a {
    color: #ffbb33;
    text-decoration: none;
    font-weight: bolder;
    transition: 0.4s;
    border-bottom: 2px solid transparent;
  }
  a:hover {
    border-color: #fff;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    padding: 100px;
    a {
      color: #ffbb33;
    }
  }
`;

export default function RightNav({ open }) {
  return (
    <>
      <Ul open={open}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/About'>About</Link>
        </li>
        <li>
          <Link href='/Contact'>Contact</Link>
        </li>
      </Ul>
    </>
  );
}
