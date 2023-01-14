//? Next Dependences
import Image from "next/image";
import Link from "next/link";
//? Styled Components
import { CardCharacter,
   CardCapsule, 
   StatusDiv, 
   NameDiv 
  } from "./style";
import { StatusBadge } from "../../styles/singeCharacter.style";

export default function Card({ characters }) {
  return (
    <CardCapsule>
      {characters.map((character) => (
        <CardCharacter key={character.id}>
          <Image src={character.image} width={200} height={200} alt={character.name} />
          <NameDiv>
            <h4>{character.name}</h4>
          </NameDiv>
          <StatusDiv>
            <h4>Status: </h4>
            <StatusBadge status={character.status}>{character.status}</StatusBadge>
          </StatusDiv>
          <Link href={`/character/${character.id}`}>Details</Link>
        </CardCharacter>
      ))}
    </CardCapsule>
  );
}
