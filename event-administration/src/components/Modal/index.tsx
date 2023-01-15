import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container, ChoiceEvent } from "./style";

import { useContext } from "react";

import { EventsContext } from "../../providers/eventscenter";

interface EventChoiceModalProps {
  setModalChoice: React.Dispatch<React.SetStateAction<boolean>>;
  beer: Beers;
}

interface Beers {
  id: number;
  name: string;
  tagline: string;
  image_url: string | null;
  abv: number;
  ibu: number;
}

interface Data {
  event: string;
}

export const EventChoiceModal = ({
  beer,
  setModalChoice,
}: EventChoiceModalProps) => {
  const { selectedEvent } = useContext(EventsContext);

  const formSchema = yup.object().shape({
    event: yup.string().min(1, "Selecione um dos eventos"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(formSchema),
  });

  const submitFunction = (data: Data) => {
    selectedEvent(data.event, beer);
    setModalChoice(false);
  };

  return (
    <Container
      id="container"
      onClick={(e) => {
        if ((e.target as HTMLElement)?.id === "container") {
          setModalChoice(false);
        }
      }}
    >
      <ChoiceEvent>
        <form onSubmit={handleSubmit(submitFunction)}>
          <select {...register("event")}>
            <option value="">Selecione o evento</option>
            <option value="wedding"> Casamento </option>
            <option value="confraternization"> Confraternização </option>
            <option value="graduation"> Formatura </option>
          </select>
          <button type="submit">Adicionar</button>
          <p>{errors.event?.message}</p>
        </form>
      </ChoiceEvent>
    </Container>
  );
};
