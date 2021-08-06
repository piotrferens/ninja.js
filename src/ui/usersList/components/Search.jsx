export const Search = ({ value, onSearch, placeholder }) => {
  const handleChange = ({ target: { value } }) => onSearch(value);

  return (
    <input
      data-testid="search-users"
      type="search"
      className="form-control"
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
};
