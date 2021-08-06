import { PaginationButton } from './PaginationButton';

export const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  if (totalNumberOfPages < 2) {
    return null;
  }

  const handleChange = (pageNumber) => onChange(pageNumber);

  return (
    <ul className="pagination">
      {Array.from(Array(totalNumberOfPages).keys()).map((pageNumber) => (
        <li className="mr-1" key={pageNumber}>
          <PaginationButton isActive={currentPageNumber === pageNumber} onChange={() => handleChange(pageNumber)}>
            {pageNumber + 1}
          </PaginationButton>
        </li>
      ))}
    </ul>
  );
};
