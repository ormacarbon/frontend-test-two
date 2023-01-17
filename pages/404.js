import Link from "next/link";

import Arrow from "../assets/arrow";
import { Title, Paragraph } from "../styles/global";

const NotFound = () => {
  return (
    <div>
      <Title>Not Found</Title>
      <Link href="/">
        <Paragraph>
          Go back to Home <Arrow />
        </Paragraph>
      </Link>
    </div>
  );
};

export default NotFound;
