import { useParams } from 'react-router-dom';

const Show = () => {
  const { showId } = useParams();
  return <div>Show Details of show {showId}</div>;
};

export default Show;
