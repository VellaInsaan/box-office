import { Link } from 'react-router-dom';
const ShowCard = ({ name, image, id, summary }) => {
  const summarySliced = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No Description';

  return (
    <div>
      <img src={image} alt='Unable to find' height='auto' />
      <h1>{name}</h1>
      <p>{summarySliced}</p>
      <div>
        <Link to={`/show/${id}`}>Read more</Link>
        <button type='button'>Star me</button>
      </div>
    </div>
  );
};

export default ShowCard;
