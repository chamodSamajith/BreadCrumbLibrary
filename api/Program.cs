using Api.Models;
using Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<BookService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("AllowFrontend");

app.MapGet("/", () => "Library API is running");

app.MapGet("/books", (BookService bookService) =>
{
    return Results.Ok(bookService.GetAll());
});

app.MapGet("/books/{id:guid}", (Guid id, BookService bookService) =>
{
    var book = bookService.GetById(id);

    if (book is null)
    {
        return Results.NotFound();
    }

    return Results.Ok(book);
});

app.MapPost("/books", (CreateBookRequest request, BookService bookService) =>
{
    if (string.IsNullOrWhiteSpace(request.Title))
    {
        return Results.BadRequest("Book title is required.");
    }

    if (string.IsNullOrWhiteSpace(request.Author))
    {
        return Results.BadRequest("Author is required.");
    }

    var book = bookService.Add(request);

    return Results.Created($"/books/{book.Id}", book);
});

app.MapPut("/books/{id:guid}", (
    Guid id,
    UpdateBookRequest request,
    BookService bookService) =>
{
    var updatedBook = bookService.Update(id, request);

    if (updatedBook is null)
    {
        return Results.NotFound();
    }

    return Results.Ok(updatedBook);
});

app.Run();