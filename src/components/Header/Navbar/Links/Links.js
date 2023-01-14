import React from "react";
import NextLink from "next/link";

import { Container } from "./Links.styles";

export function Links() {
  return (
    <Container>
      <Link href="/">Início</Link>
      <Link href="/episodes">Episódios</Link>
      <Link href="/locations">Localizações</Link>
    </Container>
  );
}

function Link({ href, children }) {
  return (
    <NextLink href={href}>
      <li>{children}</li>
    </NextLink>
  );
}
