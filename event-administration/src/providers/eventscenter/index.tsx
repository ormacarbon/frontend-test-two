import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

interface EventsProviderData {
  selectedEvent: (event: string, beer: Beers) => void;
  removeBeer: (event: string, beer: Beers) => void;
  weddingBeers: Beers[];
  confraternizationBeers: Beers[];
  graduationBeers: Beers[];
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
          toast.warn("Já adicionado para este evento");
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
          toast.warn("Já adicionado para este evento");
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
          toast.warn("Já adicionado para este evento");
        }
        break;
    }
  };

  const removeBeer = (event: string, beer: Beers) => {
    switch (event) {
      case "wedding":
        const filterWeddingBeers = weddingBeers.filter((element) => {
          return element.name !== beer.name;
        });
        setWeddingBeers(filterWeddingBeers);
        toast.info("Cerveja removida com sucesso");
        break;

      case "confraternization":
        const filterConfraternizationBeers = confraternizationBeers.filter(
          (element) => {
            return element.name !== beer.name;
          }
        );
        setConfraternizationBeers(filterConfraternizationBeers);
        toast.info("Cerveja removida com sucesso");
        break;

      case "graduation":
        const filterGraduationBeers = graduationBeers.filter((element) => {
          return element.name !== beer.name;
        });
        setGraduationBeers(filterGraduationBeers);
        toast.info("Cerveja removida com sucesso");
        break;
    }
  };

  return (
    <EventsContext.Provider
      value={{
        selectedEvent,
        removeBeer,
        weddingBeers,
        confraternizationBeers,
        graduationBeers,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
