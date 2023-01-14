import { ReactNode } from "react";
import { BeersProvider } from "./beers";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <BeersProvider>{children}</BeersProvider>
    </>
  );
};
