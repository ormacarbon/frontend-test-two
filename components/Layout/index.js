import { useRouter } from "next/router";
import { createGlobalStyle } from "styled-components";
import Titulo from "../Titulo";
import { HeaderStyle, Hr, LayoutButtoms } from "./styles";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #fefae0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;

export default function Layout(props) {
  const router = useRouter();
  return (
    <div>
      <HeaderStyle
        className={`
      flex flex-col w-2/3
      bg-white text-gray-800 rounded-md
      `}
      >
        <GlobalStyle />
        <LayoutButtoms>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-2 h-2"
            width={"36px"}
            onClick={() => router.push("/")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </LayoutButtoms>
        <div>
          <Titulo>{props.titulo ? props.titulo : "Leaderboards"}</Titulo>
        </div>
        <LayoutButtoms>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            width={"38px"}
            onClick={() => router.back()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </LayoutButtoms>
      </HeaderStyle>
      <Hr />
      <div className="p-6">{props.children}</div>
    </div>
  );
}
