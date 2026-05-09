namespace Api.Models;
public class CreateBookRequest
{
    public string Title { get; set; } = string.Empty;

    public string Author { get; set; } = string.Empty;

    public string Isbn { get; set; } = string.Empty;

    public DateOnly PublishedDate { get; set; }

    public string Owner { get; set; } = string.Empty;
}