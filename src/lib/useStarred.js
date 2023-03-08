import { useEffect, useReducer } from 'react';

const usePersistedReducer = (reducer, intialState, localstorageKey) => {
  const [state, dispatch] = useReducer(reducer, intialState, (initial) => {
    const persistedValue = localStorage.getItem(localstorageKey);
    return persistedValue ? JSON.parse(persistedValue) : initial;
  });

  useEffect(() => {
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

export const useStarredShow = () => {
  return usePersistedReducer(starredShowReducer, [], 'starredShow');
};
