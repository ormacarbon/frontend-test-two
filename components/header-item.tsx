import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from "styled-components";

const HeaderItem = (props) => {
  const { title, href } = props
  const route = useRouter()

  const isSelected = route.asPath === href

  const HeaderLi = styled.li`
    cursor: pointer;
    transition: all 0.1s;
    color: ${!isSelected ? 'var(--font-color)' : 'var(--font-selected-color)'};
    padding: 8px;
    background-color: ${isSelected && 'var(--header-selected-color)'};
    border-radius: 5px;

    &:hover {
      color: ${isSelected ? '#fff' : 'var(--font-hover-color)'};
    }
  `

  return (
    <Link href={href}>
      <HeaderLi style={{}}>{title}</HeaderLi>
    </Link>
  )
}

export default HeaderItem