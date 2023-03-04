import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/getAPI';

const Show = () => {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
  });
  // const { data, catchError } = useShowById(showId);

  if (showData) {
    return <div>Got data: {showData.name}</div>;
  }
  if (showError) {
    return <div>Error getting data: {showError.message}</div>;
  }

  return <div>Data is loading</div>;
};

export default Show;
