import { SearchContainer, Button, Input } from "./styles";
import SearchIcon from "../../assets/search";

const Search = () => {
  return (
    <SearchContainer>
      <Input type="text" name="" id="" placeholder="Search for any term..." />
      <Button>
        <SearchIcon />
      </Button>
    </SearchContainer>
  );
};

export default Search;
