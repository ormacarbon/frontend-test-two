import { GetStaticPaths, GetStaticProps } from "next";

export default function Product() {

  return(
    <h1>Product</h1>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '389' } }
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
  const movieId = params.id;
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?${process.env.API_KEY}`);
  const data = await response.json();
    
  return {
    props: {
      data
    }
  }
}

