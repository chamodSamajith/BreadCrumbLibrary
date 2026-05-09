import { useState } from 'react';
// form for book adding
const AddBookModal = ({ onAddBook }) => {
    //form data to be filled
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    publishedDate: '',
    owner: ''
  });

  //on input value change
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  //submite data api call 
  const handleSubmit = (event) => {
    event.preventDefault();

    onAddBook(formData);

    setFormData({
      title: '',
      author: '',
      isbn: '',
      publishedDate: '',
      owner: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-2">
        <div className="col-md-2">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-2">
          <input
            type="text"
            name="author"
            placeholder="Author"
            className="form-control"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-2">
          <input
            type="text"
            name="isbn"
            placeholder="ISBN"
            className="form-control"
            value={formData.isbn}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-2">
          <input
            type="date"
            name="publishedDate"
            className="form-control"
            value={formData.publishedDate}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-2">
          <input
            type="text"
            name="owner"
            placeholder="Owner"
            className="form-control"
            value={formData.owner}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-2">
          <button type="submit" className="btn btn-success w-100">
            Add Book
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddBookModal;