import { useFetch } from "../hooks/useFetch";
import useLocation from "../hooks/useLocation";

const Index = () => {
 
  const { latitude, longitude } = useLocation()
  const { data: weather, error, loading } = useFetch(`/api/weather?latitude=${latitude}&longitude=${longitude}`)

  return (
    <div>
      <code>
        <pre>{JSON.stringify(weather, null, 2)}</pre>
      </code>
    </div>
  )
}

export default Index