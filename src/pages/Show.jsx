import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/getAPI';

const useShowById = (showId) => {
  const [data, setData] = useState(null);
  const [catchError, setCatchError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowById(showId);
        setData(data);
      } catch (error) {
        setCatchError(error);
      }
    }
    fetchData();
  }, [showId]);
  return { data, catchError };
};

const Show = () => {
  const { showId } = useParams();

  const { data, catchError } = useShowById(showId);

  if (data) {
    return <div>Got data: {data.name}</div>;
  }
  if (catchError) {
    return <div>Error getting data: {catchError.message}</div>;
  }

  return <div>Data is loading</div>;
};

export default Show;
