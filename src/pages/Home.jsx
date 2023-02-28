import { useState } from 'react';

const Home = () => {
  const [searchStr, setSerachStr] = useState('');
  const onSearchInputChange = (e) => {
    setSerachStr(e.target.value);
  };
  const onSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchStr}`
    );
    const body = await response.json();
    console.log(body);
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input type='text' onChange={onSearchInputChange} value={searchStr} />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default Home;
