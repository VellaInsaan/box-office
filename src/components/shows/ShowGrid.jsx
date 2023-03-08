import ShowCard from './ShowCard';
import { useStarredShow } from '../../lib/useStarred.js';

const ShowGrid = ({ shows }) => {
  const [starredShow, dispatchStarred] = useStarredShow();

  const onStarMeClick = (showId) => {
    const isStarred = starredShow.includes(showId);
    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };

  return (
    <div>
      {shows.map((data) => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          id={data.show.id}
          summary={data.show.summary}
          image={
            data.show.image ? data.show.image.medium : '/img-not-found.jpg '
          }
          onStarMeClick={onStarMeClick}
          isStarred={starredShow.includes(data.show.id)}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
