import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

interface EventsProviderData {
  selectedEvent: (event: string, beer: Beers) => void;
  removeBeer: (event: string, beer: Beers) => void;
}

interface EventsProviderProps {
  children: ReactNode;
}

interface Beers {
  id: number;
  name: string;
  tagline: string;
  image_url: string | null;
  abv: number;
  ibu: number;
}

export const EventsContext = createContext<EventsProviderData>(
  {} as EventsProviderData
);

export const EventsProvider = ({ children }: EventsProviderProps) => {
  const [weddingBeers, setWeddingBeers] = useState<Beers[]>([] as Beers[]);
  const [confraternizationBeers, setConfraternizationBeers] = useState<Beers[]>(
    [] as Beers[]
  );
  const [graduationBeers, setGraduationBeers] = useState<Beers[]>(
    [] as Beers[]
  );

  const selectedEvent = (event: string, beer: Beers) => {
    switch (event) {
      case "wedding":
        const checkWeddingBeers = weddingBeers.some(
          (element) => element.name === beer.name
        );

        if (!checkWeddingBeers) {
          setWeddingBeers([...weddingBeers, beer]);
          toast.success("Adicionado com sucesso");
        } else {
          toast.info("Já adicionado para este evento");
        }

        break;

      case "confraternization":
        const checkConfraternizationBeers = confraternizationBeers.some(
          (element) => element.name === beer.name
        );

        if (!checkConfraternizationBeers) {
          setConfraternizationBeers([...confraternizationBeers, beer]);
          toast.success("Adicionado com sucesso");
        } else {
          toast.info("Já adicionado para este evento");
        }

        break;

      case "graduation":
        const checkGraduationBeers = graduationBeers.some(
          (element) => element.name === beer.name
        );

        if (!checkGraduationBeers) {
          setGraduationBeers([...graduationBeers, beer]);
          toast.success("Adicionado com sucesso");
        } else {
          toast.info("Já adicionado para este evento");
        }
        break;
    }
  };

  const removeBeer = (event: string, beer: Beers) => {
    switch (event) {
      case "wedding":
        console.log("casamento");
        break;

      case "confraternization":
        console.log("confraternization");
        break;

      case "graduation":
        console.log("graduation");
        break;
    }
  };

  return (
    <EventsContext.Provider value={{ selectedEvent, removeBeer }}>
      {children}
    </EventsContext.Provider>
  );
};
