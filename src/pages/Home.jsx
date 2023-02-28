import { useState } from 'react';
import { searchForPeople, searchForShow } from '../api/getAPI';

const Home = () => {
  const [searchStr, setSerachStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const onSearchInputChange = (e) => {
    setSerachStr(e.target.value);
  };

  const onRadioButtonChange = (e) => {
    setSearchOption(e.target.value);
  };

  const onSearch = async (e) => {
    e.preventDefault();
    try {
      setApiDataError(null);

      if (searchOption === 'shows') {
        const result = await searchForShow(searchStr);
        setApiData(result);
      } else {
        const result = await searchForPeople(searchStr);
        setApiData(result);
      }
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
      <form onSubmit={onSearch}>
        <input type='text' onChange={onSearchInputChange} value={searchStr} />
        <label>
          Shows
          <input
            type='radio'
            name='search-option'
            value='shows'
            checked={searchOption === 'shows'}
            onChange={onRadioButtonChange}
          />
        </label>

        <label>
          Actors
          <input
            type='radio'
            name='search-option'
            value='actors'
            checked={searchOption === 'actors'}
            onChange={onRadioButtonChange}
          />
        </label>
        <button type='submit'>Search</button>
      </form>

      <div>{renderApi()}</div>
    </div>
  );
};

export default Home;
