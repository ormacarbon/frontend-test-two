import Head from 'next/head';
import { useState } from 'react';
import { API_KEY } from '../../services/api';
import SearchBar from '../../components/Form';

export default function Search() {
  const [photoData, setPhotoData] = useState([]);
  const [photoID, setPhotoId] = useState();
  const [searchKey, setSearchKey] = useState('');

  const onChange = (event) => {
    setSearchKey(event.target.value);
  };

  const search = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${searchKey}`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );
    const data = await response.json();
    const searchResult = data.photos;
    setPhotoData(searchResult);
    photoData.map((response) => {
      return setPhotoId(response.id);
    });
  };

  return (
    <div>
      <Head>
        <title>Search</title>
      </Head>
      <SearchBar
        search={search}
        photoID={photoID}
        photoData={photoData}
        onChange={onChange}
      />
    </div>
  );
}
