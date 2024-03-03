import React, { useContext, useState } from 'react';
import { Context } from '../../../context/FirestoreContext';

const SearchForm: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const { filterItems } = useContext(Context!)!;

  const handleOnSearch = (event: React.FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
    filterItems(event.currentTarget.value);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    filterItems(search);
  };

  return (
    <form className='d-flex' role='search' onSubmit={handleOnSubmit}>
      <input
        className='form-control me-2'
        type='search'
        placeholder='Search'
        aria-label='Search'
        onChange={handleOnSearch}
      />
      <button className='btn btn-outline-success' type='submit'>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
