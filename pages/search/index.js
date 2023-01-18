import Head from 'next/head';
import SearchBar from '../../components/Form';

export default function Search() {
  return (
    <div>
      <Head>
        <title>Search</title>
      </Head>
      <SearchBar />
    </div>
  );
}
