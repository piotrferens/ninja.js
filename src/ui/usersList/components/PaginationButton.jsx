import clsx from 'clsx';

export const PaginationButton = ({ onChange, isActive, children }) => {
  const handleClick = () => onChange();

  return (
    <button onClick={handleClick} className={clsx('page-link', isActive && 'button-outline')}>
      {children}
    </button>
  );
};
