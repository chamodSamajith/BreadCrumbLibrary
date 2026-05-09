// data table
const BookTable = ({ books, onToggleAvailability }) => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Owner</th>
          <th>Available</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.owner}</td>

            <td>
              {book.isAvailable ? (
                <span className="badge bg-success">Available</span>
              ) : (
                <span className="badge bg-danger">Unavailable</span>
              )}
            </td>

            <td>
              <button
                className="btn btn-sm btn-primary"
                onClick={() => onToggleAvailability(book)}
              >
                Toggle Availability
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;