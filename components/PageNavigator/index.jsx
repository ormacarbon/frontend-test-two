import Image from "next/image";
import { useContext } from "react";

import { MainContext } from "../../contexts/MainContext";

import { PageNavigateStyle } from "./style";
import previou from "../../assets/btnleft.svg";
import next from "../../assets/btnrith.svg";

const PageNavigator = () => {
    const { nextPage, previosPage } = useContext(MainContext)


    return(
        <PageNavigateStyle>
            <button onClick={()=> previosPage()}><Image src={previou} alt="previous button"  /></button>
            <button onClick={()=> nextPage()}><Image src={next} alt="next button"  /></button>
        </PageNavigateStyle>
    )
}

export default PageNavigator;