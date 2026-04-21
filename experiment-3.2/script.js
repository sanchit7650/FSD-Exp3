let books = [
  {
    id: Date.now() + 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Help",
    status: "Available"
  },
  {
    id: Date.now() + 2,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    status: "Borrowed"
  },
  {
    id: Date.now() + 3,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    status: "Available"
  }
];

const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");
const bookForm = document.getElementById("bookForm");

function renderBooks(filteredBooks = books) {
  if (filteredBooks.length === 0) {
    bookList.innerHTML = `<div class="empty-message">No books found.</div>`;
    return;
  }

  bookList.innerHTML = filteredBooks
    .map(
      (book) => `
      <div class="book-card">
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Category:</strong> ${book.category}</p>
        <span class="badge ${book.status === "Available" ? "available" : "borrowed"}">
          ${book.status}
        </span>
        <button class="remove-btn" onclick="removeBook(${book.id})">Remove</button>
      </div>
    `
    )
    .join("");
}

function removeBook(id) {
  books = books.filter((book) => book.id !== id);
  applySearch();
}

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const category = document.getElementById("category").value.trim();
  const status = document.getElementById("status").value;

  if (!title || !author || !category) {
    alert("Please fill all fields.");
    return;
  }

  const newBook = {
    id: Date.now(),
    title,
    author,
    category,
    status
  };

  books.unshift(newBook);
  bookForm.reset();
  applySearch();
});

searchInput.addEventListener("input", applySearch);

function applySearch() {
  const keyword = searchInput.value.toLowerCase();

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author} ${book.category} ${book.status}`
      .toLowerCase()
      .includes(keyword)
  );

  renderBooks(filteredBooks);
}

renderBooks();