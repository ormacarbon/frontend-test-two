import Link from "next/link";
import Head from "../helpers/Head";

import Arrow from "../assets/arrow";
import { Title, Paragraph } from "../styles/global";

const NotFound = () => {
  return (
    <div>
      <Head title="Not Found Page" />
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
