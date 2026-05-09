// table search - frontend based searach only 
const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search books..."
      value={searchTerm}
      onChange={(event) => onSearchChange(event.target.value)}
    />
  );
};

export default SearchBar;