//? React Debounce Input
import { DebounceInput } from "react-debounce-input"
//? Styled
import { FormContainer } from "./style"

export default function Search({ setSearch, setStatus }) {

  // Block reload page
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  // Set user search input 
  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
    setStatus('')
  }

  return (

    <FormContainer onSubmit={handleSubmit}>
      <DebounceInput 
        minLength={3}
        debounceTimeout={2500}
        placeholder="Seach Here"
        onChange={handleChangeSearch}
      />
      <input type="submit" value="Search" />
    </FormContainer>
  );
}
