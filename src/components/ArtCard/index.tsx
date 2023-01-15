import Image from 'next/image';
import Link from 'next/link';
import { IArt } from '../../interfaces/art';
import * as Styled from './styles';
import * as Global from '../../styles/global-styles';

interface ArtCardProps {
  art: IArt
}

export default function ArtCard( {art}: ArtCardProps) {

  return (
    <Styled.Card>
      <Styled.Image>
        {
          art.primaryImageSmall ?
          <Image style={{width: 'auto', height: '100%'}} height={0} width={0} src={art?.primaryImage} alt={art.title}/>
          :
          <p>sem</p>
        }
      </Styled.Image>
      <Styled.Content>
        <span>
          <h2>{art?.title}</h2>
          <p>{art.objectName}</p>
        </span>
        <Link href='/arts/details/[id]' as={`/arts/details/${art.objectID}`}>
          <Global.Button>More details</Global.Button>
        </Link>
      </Styled.Content>
    </Styled.Card>
  )
}
