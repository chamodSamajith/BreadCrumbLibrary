import { useEffect, useState } from 'react';

import AddBookModal from './components/AddBookModal';
import BookTable from './components/BookTable';
import SearchBar from './components/SearchBar';

import {
  createBook,
  getBooks,
  updateBook
} from './services/api';

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    //on page load get books available
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const data = await getBooks();
      setBooks(data);
    } catch (error) {
      console.error('Failed to fetch books', error);
    }
  };

  const handleAddBook = async (book) => {
    try {
      await createBook(book);
      fetchBooks();
    } catch (error) {
      console.error('Failed to create book', error);
    }
  };

  const handleToggleAvailability = async (book) => {
    try {
      const updatedBook = {
        ...book,
        isAvailable: !book.isAvailable
      };

      await updateBook(book.id, updatedBook);

      fetchBooks();
    } catch (error) {
      console.error('Failed to update book', error);
    }
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="mb-4">1Breadcrumb Library</h1>

      <AddBookModal onAddBook={handleAddBook} />

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <BookTable
        books={filteredBooks}
        onToggleAvailability={handleToggleAvailability}
      />
    </div>
  );
}

export default App;