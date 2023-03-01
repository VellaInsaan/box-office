import React from 'react';
import ShowCard from './ShowCard';

const ShowGrid = ({ shows }) => {
  return (
    <div>
      {console.log(shows)}
      {shows.map((data) => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          id={data.show.id}
          summary={data.show.summary}
          image={
            data.show.image ? data.show.image.medium : '/img-not-found.png'
          }
        />
      ))}
    </div>
  );
};

export default ShowGrid;