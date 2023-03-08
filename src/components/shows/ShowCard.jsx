const ShowCard = ({ name, image, id, summary, onStarMeClick }) => {
  const summarySliced = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No Description';

  return (
    <div>
      <img src={image} alt='Unable to find' height='auto' />
      <h1>{name}</h1>
      <p>{summarySliced}</p>
      <div>
        <a href={`/show/${id}`} target='_blank' rel='noreferrer'>
          Read more
        </a>
        <button type='button' onClick={() => onStarMeClick(id)}>
          Star me
        </button>
      </div>
    </div>
  );
};

export default ShowCard;
