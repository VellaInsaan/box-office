import { useState } from 'react';
import { searchForPeople, searchForShow } from '../api/getAPI';
import SearchForm from '../components/SearchForm';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setApiDataError(null);

      let result;

      if (searchOption === 'shows') {
        result = await searchForShow(q);
      } else {
        result = await searchForPeople(q);
      }
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApi = () => {
    if (apiDataError) return <div>Error Occured: {apiDataError.message}</div>;
    if (apiData) {
      return apiData[0].show
        ? apiData.map((data) => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map((data) => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
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
