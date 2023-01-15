import Head from 'next/head';
import CardArt from '../../components/ArtCard';
import { IListArts } from '../../pages/arts';
import * as Styled from './styles';
import * as Global from '../../styles/global-styles';
import Pagination from '../../components/Pagination';
import { IPagination } from '../../interfaces/pagination';

interface IListArtsProps extends IListArts {
  pagination?: IPagination;
}

export default function ListArtsPage( {arts, pagination}: IListArtsProps) {
  const currentPage = pagination?.nextPage ? ` - Page ${pagination.nextPage - 1}` : '';

  return (
    <>
      <Head>
        <title>{`List - Arts of The World ${currentPage}`}</title>
        <meta name="description" content="Arts of The World" />
      </Head>
      <div>
        <Global.Title>Gallery of Arts</Global.Title>
        <Styled.Container>
          {arts.map((art) => (
            <CardArt key={art?.objectID} art={art}/>
          ))}
        </Styled.Container>
        <Pagination {...pagination}/>
      </div>
    </>
  )
}


