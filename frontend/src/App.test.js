import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './components/SearchBar';

describe('SearchBar Component', () => {
  test('calls onSearchChange when user types', () => {
    const mockOnSearchChange = jest.fn();

    render(
      <SearchBar
        searchTerm=""
        onSearchChange={mockOnSearchChange}
      />
    );

    const input = screen.getByPlaceholderText('Search books...');

    fireEvent.change(input, {
      target: { value: 'Clean Code' }
    });

    expect(mockOnSearchChange).toHaveBeenCalledWith(
      'Clean Code'
    );
  });
});