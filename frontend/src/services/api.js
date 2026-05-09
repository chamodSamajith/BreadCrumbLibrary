import axios from 'axios';

const API_BASE_URL = 'http://localhost:5004';

export const getBooks = async () => {
  const response = await axios.get(`${API_BASE_URL}/books`);
  return response.data;
};

export const createBook = async (book) => {
  const response = await axios.post(`${API_BASE_URL}/books`, book);
  return response.data;
};

export const updateBook = async (id, updatedBook) => {
  const response = await axios.put(
    `${API_BASE_URL}/books/${id}`,
    updatedBook
  );

  return response.data;
};