import Image from "next/image";
import Link from "next/link";

import { CardStyle } from "./style";


const Card = ({ id,src, name, authors }) => {
    return(
        <Link href={`/book/${id}`}>
            <CardStyle>
            <figure>
                <Image src={src} alt={name} width={280} height={280} />
            </figure>
            <div>
                <h4>
                  {name}
                </h4>
                <p>{authors}</p>  
            </div>
        </CardStyle>
        </Link>
    )
}

export default Card;


