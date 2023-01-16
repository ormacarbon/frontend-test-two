import { useEffect } from "react";

import Loading from "../../helpers/Loading";
import useFetch from "../../hooks/useFetch";
import { GET_NEWS } from "../../api";

import {
  FeedSection,
  NewsContainer,
  Image,
  Title,
  Paragraph,
  FlexDiv,
  Link,
} from "./styles";
import Arrow from "../../assets/arrow";

const Feed = ({ section }) => {
  const { data, request, error, loading } = useFetch();

  function formatDate(dateString) {
    const date = dateString.slice(0, 10).split("-").join("/");
    const time = dateString.slice(11, 16).split(":").join("h");
    return `${date} • ${time}`;
  }

  useEffect(() => {
    async function fetchNews() {
      const { url, options } = GET_NEWS({ section });
      await request(url, options);
    }
    fetchNews();
  }, [request, section]);

  if (error) return <Paragraph>Sem resultados</Paragraph>;
  if (loading) return <Loading />;
  if (data && data.results.length)
    return (
      <FeedSection>
        {data.results.map(
          ({ multimedia, title, abstract, published_date, url }) => (
            <NewsContainer>
              <Image src={multimedia[0].url} alt={multimedia[0].caption} />
              <div>
                <Title>{title}</Title>
                <Paragraph>{abstract}</Paragraph>
                <FlexDiv>
                  <span>{formatDate(published_date)}</span>
                  <Link href={url} target="_blank">
                    Full Story
                    <Arrow />
                  </Link>
                </FlexDiv>
              </div>
            </NewsContainer>
          )
        )}
      </FeedSection>
    );
};

export default Feed;
