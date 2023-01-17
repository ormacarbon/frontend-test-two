import { CardDiv } from "./styles";

import { AiFillStar } from "react-icons/ai";

interface CardProps {
  poster: string;
  title: string;
  vote: number;
}

export default function Card({ poster, title, vote }: CardProps) {
  const imgURL = `https://image.tmdb.org/t/p/w500${poster}`;

  return (
    <CardDiv>
      <img src={imgURL} alt="" />
      <footer>
        <h2>{title}</h2>
        <span>{vote}</span>
        <AiFillStar size={16} color="#fde047" />
      </footer>
    </CardDiv>
  );
}
