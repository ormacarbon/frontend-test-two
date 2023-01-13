import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Input } from './styles';

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchMovie(){
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPost(data: SearchFormInput){
    await getMovies(data.query);
  }
  return(
    <Container onSubmit={handleSubmit(handleSearchPost)}>
        <Input type="text" placeholder="Buscar Conteúdo" {...register("query")} />
    </Container>
  )
}