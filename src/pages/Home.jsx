import { useState } from 'react';
import { searchForShow } from '../api/getAPI';

const Home = () => {
  const [searchStr, setSerachStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  console.log(apiDataError);

  const onSearchInputChange = (e) => {
    setSerachStr(e.target.value);
  };

  const onSearch = async (e) => {
    e.preventDefault();
    try {
      setApiDataError(null);
      const result = await searchForShow(searchStr);
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApi = () => {
    if (apiDataError) return <div>Error Occured: {apiDataError.message}</div>;
    if (apiData) {
      return apiData.map((data) => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }

    return null;
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input type='text' onChange={onSearchInputChange} value={searchStr} />
        <button type='submit'>Search</button>
      </form>
      <div>{renderApi()}</div>
    </div>
  );
};

export default Home;
