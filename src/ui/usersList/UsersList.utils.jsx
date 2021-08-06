import chunk from 'lodash.chunk';

export const calculateTotalNumberOfPages = ({ rowsLength, rowsPerPage }) =>
  rowsPerPage === 0 ? 0 : Math.ceil(rowsLength / rowsPerPage);

export const filterRow = ({ row, searchPhrase }) => {
  const searchPhraseLowerCase = searchPhrase.toLowerCase();

  return (
    row.name?.toLowerCase().includes(searchPhraseLowerCase) || row.email?.toLowerCase().includes(searchPhraseLowerCase)
  );
};

export const getRows = ({ rowsData, searchPhrase, rowsPerPage }) => {
  const filteredRows = rowsData.filter((row) => filterRow({ row, searchPhrase }));

  const rows = chunk(filteredRows, rowsPerPage);

  return rows;
};
