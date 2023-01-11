import { ReactElement } from "react";
import { Header } from "../Header/Header";
import { AppContent, Container } from "./app-layout.style";

interface AppLayoutProps {
  sessionTitle: string;
  children: ReactElement;
}

export const AppLayout = ({ sessionTitle, children }: AppLayoutProps) => {
  return (
    <Container>
      <Header>{sessionTitle}</Header>

      {/* <Sidebar css={{ gridArea: "sidebar" }} /> */}

      <AppContent>{children}</AppContent>
    </Container>
  );
};
