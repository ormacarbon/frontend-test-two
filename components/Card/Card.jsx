//? Next Dependences
import Image from "next/image";
import Link from "next/link";
//? Styled Components
import { CardCharacter, CardCapsule, StatusDiv, NameDiv } from "./style";
import { StatusBadge,  } from "../../styles/singeCharacter.style";

export default function Card({ characters, search }) {
  return (
    <CardCapsule>
      {characters.map((item) => (
        <CardCharacter key={item.id}>
          <Image src={item.image} width={200} height={200} alt={item.name} />
          <NameDiv>
            <h4>{item.name}</h4>
          </NameDiv>
          <StatusDiv>
            <h4>Status: </h4>
            <StatusBadge status={item.status}>{item.status}</StatusBadge>
          </StatusDiv>
          <Link href={`/character/${item.id}`}>Details</Link>
        </CardCharacter>
      ))}
    </CardCapsule>
  );
}
