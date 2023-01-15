import Image from 'next/image';
import Head from 'next/head';
import { IArt } from '../../interfaces/art'
import * as Styled from './styles';
import * as Global from '../../styles/global-styles';
import Pagination from '../../components/Pagination';

interface IArtProps {
  art: IArt;
}

/*
  Chaves colocardas apenas pala delimitar as informações desejadas,
  pois a API contém muitas informações.
*/
const keys = ['objectName', 'culture', 'period', 'department', 'dimensions', 'accessionYear', 'accessionNumber'];

function normalCase(key: string){
  const result = key.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export const ArtPage = ({art}: IArtProps) => {

  return (
    <>
      <Head>
        <title>{`${art.title} - Arts of The World` } </title>
      </Head>
      <Styled.Container>
      <Global.Title>{art.title}</Global.Title>
        <Styled.Content>
          <Image style={{width: '100%', height: 'auto'}} height={0} width={0} src={art?.primaryImage} alt={art.title}/>
          <div>
            <h2>Information:</h2>
            <ul>
              {keys.map((key)=> (
                <li key={key}>{normalCase(key)}: <span>{art[key] || 'No information'}</span></li>
              ))}
            </ul>
          </div>
        </Styled.Content>
      </Styled.Container>
    </>
  )
}
