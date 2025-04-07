// Book storage
const books = [];

// Function to add a book
function addBook(title, author) {
  const book = { id: books.length + 1, title, author, available: true };
  books.push(book);
  loadBooks();
}

// Function to load books dynamically
function loadBooks() {
  const libraryDiv = document.getElementById("library");
  const bookList = books.map(book => `
    <div class="book">
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Status: ${book.available ? "Available" : "Borrowed"}</p>
      <button onclick="toggleBorrow(${book.id})">
        ${book.available ? "Borrow" : "Return"}
      </button>
    </div>
  `).join("");
  libraryDiv.innerHTML = `<h2>Available Books</h2>${bookList}`;
}

// Function to toggle borrow/return status
function toggleBorrow(bookId) {
  const book = books.find(b => b.id === bookId);
  if (book) {
    book.available = !book.available;
    loadBooks();
  }
}

// Event listener for adding books
document.getElementById("addBook").addEventListener("click", () => {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  if (title && author) {
    addBook(title, author);
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
  } else {
    alert("Please enter both a title and an author.");
  }
});

// Load initial books on page load
document.addEventListener("DOMContentLoaded", loadBooks);