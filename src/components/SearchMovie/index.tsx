import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Input } from './styles';
import { useContext } from 'react';
import { MagnifyingGlass } from "phosphor-react";
import { ContextAplicattion } from '../../context/ContextAplicattion';

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchMovie(){
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  const { getMovies } = useContext(ContextAplicattion);

  // Function that sends the value received in the search input to the context, after this information has been valited
  async function handleSearchPost(data: SearchFormInput){
    await getMovies(data.query);
  }

  return(
    <Container onSubmit={handleSubmit(handleSearchPost)}>
        <Input type="text" placeholder="Buscar por um filme" {...register("query")} />
        <button type="submit"><MagnifyingGlass size={25} /></button>
    </Container>
  )
}