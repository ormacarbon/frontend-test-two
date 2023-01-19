import { useRouter } from "next/router";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Title from "../Title";
import {
  DarkTheme,
  GlobalStyle,
  HeaderStyle,
  Hr,
  LayoutButtoms,
  LightTheme,
  RightButtoms,
} from "./styles";
import { setCookie, parseCookies } from "nookies";

export default function Layout(props) {
  const [theme, setTheme] = useState(
    parseCookies("theme").theme || "LightTheme"
  );
  const isDarkTheme = theme === "DarkTheme";
  const router = useRouter();

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
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
            <Title>{props.title ? props.title : "Leaderboards"}</Title>
          </div>

          <RightButtoms>
            <LayoutButtoms>
              <div
                onClick={() => {
                  if (theme === "LightTheme") {
                    setTheme("DarkTheme");
                    setCookie(null, "theme", "DarkTheme", {
                      maxAge: 86400 * 7,
                      path: "/",
                    });
                  }
                  if (theme === "DarkTheme") {
                    setTheme("LightTheme");
                    setCookie(null, "theme", "LightTheme", {
                      maxAge: 86400 * 7,
                      path: "/",
                    });
                  }
                }}
              >
                {theme === "LightTheme" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    width={"38px"}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    width={"38px"}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                )}
              </div>
            </LayoutButtoms>
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
          </RightButtoms>
        </HeaderStyle>
        <Hr />
        <div className="p-6">{props.children}</div>
      </div>
    </ThemeProvider>
  );
}
