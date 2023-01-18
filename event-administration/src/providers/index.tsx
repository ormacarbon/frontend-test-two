import { ReactNode } from "react";

import { BeersProvider } from "./beers";
import { EventsProvider } from "./eventscenter";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <EventsProvider>
        <BeersProvider>{children}</BeersProvider>
      </EventsProvider>
    </>
  );
};
