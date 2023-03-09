import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSerachStr] = useSearchStr();
  const [searchOption, setSearchOption] = useState('shows');

  const onSearchInputChange = (e) => {
    setSerachStr(e.target.value);
  };

  const onRadioButtonChange = (e) => {
    setSearchOption(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const options = {
      q: searchStr,
      searchOption,
    };

    onSearch(options);
  };
  return (
    <form onSubmit={onSubmit}>
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
  );
};

export default SearchForm;
