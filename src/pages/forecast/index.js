import Loading from "../../components/Loading/Loading";
import { useFetch } from "../../hooks/useFetch";
import useLocation from "../../hooks/useLocation";

const Index = () => {
  const { latitude, longitude } = useLocation();
  const { data, error, loading } = useFetch(
    `/api/forecast?latitude=${latitude}&longitude=${longitude}`
  );

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <code>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </code>
      )}
    </div>
  );
};

export default Index;
