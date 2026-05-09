using Xunit;
using Api.Models;
using Api.Services;

namespace api.Tests;

public class BookServiceTests
{
    [Fact]
    public void Update_ShouldChangeAvailability()
    {
        // Arrange
        var service = new BookService();

        var existingBook = service.GetAll().First();

        var updateRequest = new UpdateBookRequest
        {
            Title = existingBook.Title,
            Author = existingBook.Author,
            Isbn = existingBook.Isbn,
            PublishedDate = existingBook.PublishedDate,
            Owner = existingBook.Owner,
            IsAvailable = !existingBook.IsAvailable
        };

        // Act
        var updatedBook = service.Update(existingBook.Id, updateRequest);

        // Assert
        Assert.NotNull(updatedBook);

        Assert.Equal(
            updateRequest.IsAvailable,
            updatedBook!.IsAvailable
        );
    }
}