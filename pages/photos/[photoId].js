import { API_KEY } from '../../services/api';

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
  console.log('context', context);

  const { photo } = context;

  return (
    <div>
      <h1>Your Photo Url: {photo != null ? photo.url : ''}</h1>
      <img src={photo.src.original} height={500} width={500}></img>
    </div>
  );
}
