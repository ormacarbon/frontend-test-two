import Link from "next/link";
import React from "react";
import { IoCaretBackSharp } from "react-icons/io5";
import { LinkContainer } from "./styles";

export default function BackBtn(props) {
  return (
    <LinkContainer>
      <Link href={props.link} className="back">
        <IoCaretBackSharp />
        <p>Back</p>
      </Link>
    </LinkContainer>
  );
}
