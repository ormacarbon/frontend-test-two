export default function Pagination({
  pokemonPerPage,
  totalPokemons,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);

  return (
    <div>
      {pageNumbers.map((number) => {
        return (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        );
      })}
    </div>
  );
}
