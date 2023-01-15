import Link from 'next/link';
import Head from 'next/head';
import * as Global from '../../styles/global-styles';
import * as Styled from './styles';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - Arts of The World</title>
        <meta name="description" content="Arts of The World" />
      </Head>
      <Styled.Content>
        <p>Welcome</p>
        <h1>Arts of The World</h1>
        <div>
          <p>The most complete catalog of arts from around the world.</p>
          <Link href='/arts/page/1'>
            <Global.Button>
              Go to Arts
            </Global.Button>
          </Link>
        </div>
      </Styled.Content>
    </>
  )
}
