using Api.Models;

namespace Api.Services;

public class BookService
{
    //hard coded data for mocked API
    private readonly List<Book> _books =
    [
        new Book
        {
            Title = "Clean Code",
            Author = "Robert C. Martin",
            Isbn = "9780132350884",
            PublishedDate = new DateOnly(2008, 8, 1),
            Owner = "Alice",
            IsAvailable = true
        },
        new Book
        {
            Title = "The Pragmatic Programmer",
            Author = "Andy Hunt",
            Isbn = "9780201616224",
            PublishedDate = new DateOnly(1999, 10, 30),
            Owner = "Ben",
            IsAvailable = false
        },
        new Book
        {
            Title = "Chamod The Programmer",
            Author = "Chamod Rathnayake",
            Isbn = "0466525361",
            PublishedDate = new DateOnly(1996, 06, 06),
            Owner = "CR",
            IsAvailable = false
        }
    ];

    // retrieves all books
    public List<Book> GetAll()
    {
        return _books;
    }

    //post request function - add book to library
    public Book Add(CreateBookRequest request)
    {
        var book = new Book
        {
            Title = request.Title.Trim(),
            Author = request.Author.Trim(),
            Isbn = request.Isbn.Trim(),
            PublishedDate = request.PublishedDate,
            Owner = request.Owner.Trim(),
            IsAvailable = true
        };

        _books.Add(book);

        return book;
    }

    //find a book by id
    public Book? GetById(Guid id)
    {
        return _books.FirstOrDefault(book => book.Id == id);
    }

    //updatae book entity
    public Book? Update(Guid id, UpdateBookRequest request)
    {
        var book = GetById(id);

        if (book is null)
        {
            return null;
        }

        book.Title = request.Title.Trim();
        book.Author = request.Author.Trim();
        book.Isbn = request.Isbn.Trim();
        book.PublishedDate = request.PublishedDate;
        book.Owner = request.Owner.Trim();
        book.IsAvailable = request.IsAvailable;

        return book;
    }
}