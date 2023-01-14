import { FILTERS_GENDER, FILTERS_STATUS } from "../../constants/filters";
import { Pagination } from "../Pagination";
import { Search } from "../Search";
import { Container } from "./Filters.styles";

export function Filters({
  page,
  setPage,
  pagination,
  avatars,
  handleNameChange,
  handleFilterChange,
}) {
  return (
    <Container className="flex between center">
      <div className="flex">
        <Search onUpdateSearch={handleNameChange} />

        <select onChange={handleFilterChange}>
          <option value="all" selected>
            Todos
          </option>
          <optgroup label="Status">
            {FILTERS_STATUS.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </optgroup>

          <optgroup label="Gênero">
            {FILTERS_GENDER.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      {avatars?.length && (
        <Pagination
          currentPage={page}
          onChangePage={setPage}
          totalPages={pagination.pages}
        />
      )}
    </Container>
  );
}
