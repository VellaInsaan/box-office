import React, { useEffect, useReducer } from 'react';
import ShowCard from './ShowCard';

const usePersistedReducer = (reducer, intialState, localstorageKey) => {
  const [state, dispatch] = useReducer(reducer, intialState, (initial) => {
    const persistedValue = localStorage.getItem(localstorageKey);
    return persistedValue ? JSON.parse(persistedValue) : initial;
  });

  useEffect(() => {
    console.log(state);
    localStorage.setItem(localstorageKey, JSON.stringify(state));
  }, [localstorageKey, state]);

  return [state, dispatch];
};

const starredShowReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.showId);
    case 'UNSTAR':
      return currentStarred.filter((showId) => showId !== action.showId);
    default:
      return currentStarred;
  }
};

const ShowGrid = ({ shows }) => {
  const [starredShow, dispatchStarred] = usePersistedReducer(
    starredShowReducer,
    [],
    'starredShow'
  );

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
        />
      ))}
    </div>
  );
};

export default ShowGrid;
