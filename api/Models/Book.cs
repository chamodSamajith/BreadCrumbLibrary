namespace Api.Models;
public class Book
{
     public Guid Id { get; set; } = Guid.NewGuid();

    public string Title { get; set; } = string.Empty;

    public string Author { get; set; } = string.Empty;

    public string Isbn { get; set; } = string.Empty;

    public DateOnly PublishedDate { get; set; }

    public string Owner { get; set; } = string.Empty;

    public bool IsAvailable { get; set; } = true;
}