//? React Debounce Input
import { DebounceInput } from "react-debounce-input"
//? Styled
import { FormContainer } from "./style"

export default function Search({ search, setSearch }) {


  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  
  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
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
