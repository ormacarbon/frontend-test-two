import Link from 'next/link';
import { IPagination } from '../../interfaces/pagination';
import * as Styled from './styles';

interface PaginationProps extends IPagination {}

export default function Pagination({nextPage, prevPage, numberOfArts, artsPerPage}: PaginationProps) {

  const nextLink = `/arts/page/${nextPage}`;
  const prevLink = `/arts/page/${prevPage}`;
  const hasNextPage = nextPage * artsPerPage < numberOfArts;
  const hasPrevPage = prevPage >= 1;


  return (
    <Styled.Container>
      {hasPrevPage && <Link href={prevLink}><Styled.Button>Prev</Styled.Button></Link>}
      {hasNextPage && <Link href={nextLink}><Styled.Button>Next</Styled.Button></Link>}
    </Styled.Container>
  )
}
