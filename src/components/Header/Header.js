import React, { useCallback, useState } from "react";
import { useDebounceScroll } from "../../shared/hooks";
import { Container } from "./Header.styles";
import { Navbar } from "./Navbar";

export function Header() {
  const [isFixed, setIsFixed] = useState(false);

  const debouncedCallback = useCallback(() => {
    const scrollY = window.scrollY;

    if (scrollY > 100) {
      return setIsFixed(true);
    }

    return setIsFixed(false);
  }, []);

  useDebounceScroll(debouncedCallback, 100);

  return (
    <Container isFixed={isFixed}>
      <Navbar />
    </Container>
  );
}
