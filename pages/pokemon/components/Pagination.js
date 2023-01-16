import { PaginationContainer } from "../styles";

export default function Pagination({
  pokemonPerPage,
  totalPokemons,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((number) => {
        return (
          <div key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </div>
        );
      })}
    </PaginationContainer>
  );
}
