import { useFetch } from "../hooks/useFetch";

import { Card } from "../components/card/card";

export default function Home() {
  const { data, loading, error } = useFetch("movie/popular", null);

  return (
    <main>
      <Card content={data?.results[0]} />
    </main>
  )
}
