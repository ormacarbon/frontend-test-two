import Image from "next/image"

import { CardCharacter, CardCapsule } from "./style"

export default function Card ({ characters }) {


    return (

        <CardCapsule>
            {characters.map((item) => (
                <CardCharacter key={item.id}>
                    <Image src={item.image} width={200} height={200} alt={item.name}/>
                    <h4>{item.name}</h4>
                    <p>Status: {item.status}</p>
                </CardCharacter>
            ))}
        </CardCapsule>
    )

}