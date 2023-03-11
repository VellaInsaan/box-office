import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './CustomRadio';

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
      <CustomRadio
        label='Shows'
        name='search-option'
        value='shows'
        checked={searchOption === 'shows'}
        onChange={onRadioButtonChange}
      />

      <CustomRadio
        label='Actors'
        name='search-option'
        value='actors'
        checked={searchOption === 'actors'}
        onChange={onRadioButtonChange}
      />

      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchForm;
