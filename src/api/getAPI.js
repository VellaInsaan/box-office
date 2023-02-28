const BASE_URL = 'https://api.tvmaze.com';

const getAPI = async (searchQuery) => {
  const response = await fetch(`${BASE_URL}${searchQuery}`);
  const body = await response.json();
  return body;
};

export const searchForShow = (query) => getAPI(`/search/shows?q=${query}`);
