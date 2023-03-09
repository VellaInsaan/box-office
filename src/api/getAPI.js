const BASE_URL = 'https://api.tvmaze.com';

const getAPI = async (searchQuery) => {
  const response = await fetch(`${BASE_URL}${searchQuery}`);
  const body = await response.json();
  return body;
};

export const searchForShow = (query) => getAPI(`/search/shows?q=${query}`);
export const searchForPeople = (query) => getAPI(`/search/people?q=${query}`);

export const getShowById = (showId) =>
  getAPI(`/shows/${showId}?embed[]=seasons&embed[]=cast`);

export const getShowsByIds = async (showsIds) => {
  const promises = showsIds.map((showId) => getAPI(`/shows/${showId}`));
  const result = await Promise.all(promises);
  console.log(result);
  return result;
};
