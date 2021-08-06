import { useState, useMemo } from 'react';

import { Pagination } from './components/Pagination';
import { Search } from './components/Search';
import { Table } from './components/Table';
import { calculateTotalNumberOfPages, getRows } from './UsersList.utils';

export const UsersList = ({ rowsData, rowsPerPage = 40 }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [searchPhrase, setSearchPhrase] = useState('');

  const rows = useMemo(() => getRows({ rowsData, searchPhrase, rowsPerPage }), [searchPhrase, rowsPerPage, rowsData]);
  const totalNumberOfPages = useMemo(
    () => calculateTotalNumberOfPages({ rowsLength: rows.flat().length, rowsPerPage }),
    [rows, rowsPerPage],
  );

  const handleSearch = (searchPhrase) => {
    setSearchPhrase(searchPhrase);
    setCurrentPageNumber(0);
  };

  return (
    <div>
      <div className="p-b-1">
        <Search onSearch={handleSearch} value={searchPhrase} />
      </div>
      <Table rows={rows[currentPageNumber]} />
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={setCurrentPageNumber}
      />
    </div>
  );
};
