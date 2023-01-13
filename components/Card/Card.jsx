import Image from "next/image";
import Link from "next/link";

import { CardCharacter, CardCapsule } from "./style";

export default function Card({ characters, search }) {
  return (
    <CardCapsule>
          {characters.map((item) => (
        <CardCharacter key={item.id}>
          <Image src={item.image} width={200} height={200} alt={item.name} />
          <h4>{item.name}</h4>
          {item.status === "Alive" ? (
            <p>{item.status} V</p>
          ) : (
            <p>{item.status} X</p>
          )}
          <Link href={`/character/${item.id}`}>Details</Link>
        </CardCharacter>
      ))}
    </CardCapsule>
  );
}
