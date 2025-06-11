import { useEffect, useState } from "react";
import FilterData from "./FilterData";

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLodaing] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok)
          throw new Error(`Https Error for fetching data : ${response.stats}`);
        const json = await response.json();
        setData(json);
        setLodaing(false);
      } catch (e) {
        setError(e);
        setLodaing(false);
      }
    };
    dataFetch();
  }, []);

  if (loading) return <p>Data Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return <FilterData data={data} />;
}
export default FetchData;
