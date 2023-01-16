import Image from "next/image";
import Link from "next/link";
import Img1 from "../assets/claude-piche-EHbtjmz7hvw-unsplash.jpg";
import { ButtonLink } from "../components/Button/style";
import {
  ArticleBreweries,
  DivIntroducao,
  DivIntroducaoConteudo,
  MainBg,
} from "./Home/style";

export default function Home() {
  return (
    <>
      <MainBg>
        <DivIntroducao>
          <DivIntroducaoConteudo>
            <h1 className="font-1-xxl color-0">
              Breweries you would love<span className="color-p1">.</span>
            </h1>
            <p className="font-2-l color-5">
              Here you can find the best breweries in the country and the best
              thing, close to you!
            </p>
            <ButtonLink>
              <Link href="./">Lets drink!</Link>
            </ButtonLink>
          </DivIntroducaoConteudo>
          <div>
            <Image src={Img1} alt="Primeira imagem" />
          </div>
        </DivIntroducao>
      </MainBg>
      <ArticleBreweries>
        <h2 className="font-1-xxl">
          choose one<span className="color-p1">.</span>
        </h2>
        <ul>
          {/* conditional rendering here? */}
          <li>
            <Image></Image>
          </li>
        </ul>
      </ArticleBreweries>
    </>
  );
}
