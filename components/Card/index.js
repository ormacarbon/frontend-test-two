import { useState } from 'react';
import useDownloader from 'react-use-downloader';
import Link from 'next/link';
import { DownloadIcon } from '../Icons';

import {
  Container,
  CardBox,
  Img,
  CardOverlay,
  DownloadBtn,
  DownloadBtnMobile,
} from './styles';

export function Card(props) {
  const [isHovering, setIsHovering] = useState(false);
  const { download } = useDownloader();

  const fileUrl = props.fileUrl;
  const fileName = props.fileName;

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleDownload = () => {
    download(fileUrl, fileName);
  };

  return (
    <Container>
      <CardBox onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Link href={`photos/photo/${props.photoId}`}>
          <Img src={props.photo} alt={props.alt} />

          {isHovering && (
            <CardOverlay>
              <h1>{props.author}</h1>
              <DownloadBtn onClick={handleDownload}>
                <DownloadIcon />
              </DownloadBtn>
            </CardOverlay>
          )}
        </Link>
        <DownloadBtnMobile onClick={handleDownload}>
          <DownloadIcon />
        </DownloadBtnMobile>
      </CardBox>
    </Container>
  );
}
