import { useFetch } from '../../hooks/useFetch'
import useLocation from '../../hooks/useLocation'

const index = () => {
  const { latitude, longitude } = useLocation()
  const { data, error, loading } = useFetch(`/api/forecast?latitude=${latitude}&longitude=${longitude}`)
  console.log(data)
  return (
    <div>
      <code>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </code>
    </div>
  )
}

export default index