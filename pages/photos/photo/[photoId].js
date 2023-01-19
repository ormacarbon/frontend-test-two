import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import useDownloader from 'react-use-downloader';
import { ChevronDown } from '../../../components/Icons';
import { API_KEY } from '../../../services/api';
import { capitalizeFirstLowercaseRest } from '../../../utils/capitalizeFirstLowercaseRest';
import {
  Container,
  Header,
  ArtistInfo,
  InfoPhoto,
  Download,
  ButtonDownload,
  DropDownListContainer,
  DropDownList,
  Button,
  ListItem,
  Content,
  ImgContainer,
  Img,
  Details,
  InfoTitle,
  Info,
  AvgColor,
} from '../../../styles/photoId';

export async function getServerSideProps(context) {
  const { photoId } = context.query;

  const data = await fetch(`https://api.pexels.com/v1/photos/${photoId}`, {
    headers: {
      Authorization: API_KEY,
    },
  });

  const photo = await data.json();

  return {
    props: { photo: photo.status !== 404 ? photo : null },
  };
}

export default function Photo(context) {
  const [isOpen, setIsOpen] = useState(false);
  const { download } = useDownloader();

  const { photo } = context;

  const toggling = () => setIsOpen(!isOpen);

  const fileName = `${photo.id}.jpg`;

  return (
    <Container>
      <Head>
        <title>Photo - {photo.id}</title>
      </Head>
      <Content>
        <Header>
          <ArtistInfo>
            <Link href={photo.photographer_url}>{photo.photographer}</Link>
            <span>{capitalizeFirstLowercaseRest(photo.alt)}</span>
          </ArtistInfo>

          <Download>
            <ButtonDownload onClick={toggling}>
              <Info>Download image</Info>
              <ChevronDown />
            </ButtonDownload>
            {isOpen && (
              <DropDownListContainer>
                <DropDownList>
                  <ListItem>
                    <Button
                      onClick={() => {
                        download(photo.src.original, fileName);
                        toggling();
                      }}
                    >
                      Original
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button
                      onClick={() => {
                        download(photo.src.large, fileName);
                        toggling();
                      }}
                    >
                      Large
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button
                      onClick={() => {
                        download(photo.src.medium, fileName);
                        toggling();
                      }}
                    >
                      Medium
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button
                      onClick={() => {
                        download(photo.src.small, fileName);
                        toggling();
                      }}
                    >
                      Small
                    </Button>
                  </ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </Download>
        </Header>
        <ImgContainer>
          <Img src={photo.src.original} alt={photo.alt} />
        </ImgContainer>
        <InfoPhoto>
          <h1>Photo details</h1>
          <Details>
            <div>
              <InfoTitle>Dimensions</InfoTitle>
              <Info>
                {photo.width} x {photo.height}
              </Info>
            </div>
            <div>
              <InfoTitle>Average color</InfoTitle>
              <Info>
                <AvgColor>
                  {photo.avg_color}{' '}
                  <div style={{ 'background-color': `${photo.avg_color}` }} />
                </AvgColor>
              </Info>
            </div>
          </Details>
        </InfoPhoto>
      </Content>
    </Container>
  );
}
