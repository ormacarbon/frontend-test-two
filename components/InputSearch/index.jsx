import Image from "next/image";
import { useContext, useState } from "react";

import { MainContext } from "../../contexts/MainContext";

import { FormSearch } from "./style";
import iconSearch from "../../assets/search.svg"

const InputSearch = () => {
  const { setSearch } = useContext(MainContext)
  const [ text, setText ] = useState("")

    return (
      <FormSearch>
        <div>
            <Image src={iconSearch} alt="Icon Search"  />
            <input
            type="text"
            placeholder="Search "
            value={text}
            onChange={(event)=> setText(event.target.value)}
            />
        </div>
        <button onClick={()=> { setSearch(text)
          setText("") 
        }} >Search</button>
      </FormSearch>
    );
}
  
export default InputSearch;