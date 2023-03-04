import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchForPeople, searchForShow } from '../api/getAPI';
import ActorGrid from '../components/actors/ActorGrid';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShow(filter.q)
        : searchForPeople(filter.q),

    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  // const [apiData, setApiData] = useState(null);
  // const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
  };

  const renderApi = () => {
    if (apiDataError) return <div>Error Occured: {apiDataError.message}</div>;

    if (apiData?.length === 0) {
      return <div>No results found</div>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorGrid actors={apiData} />
      );
    }

    return null;
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <div>{renderApi()}</div>
    </div>
  );
};

export default Home;
