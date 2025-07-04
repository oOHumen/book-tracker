const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const bookName = document.getElementById('bookname').value.trim();
    const bookauthor = document.getElementById('bookauthor').value.trim();
    const bookdescription = document.getElementById('bookdescription').value.trim();
    const bookStatus = document.getElementById('bookstatus').value;

    if (!bookName || !bookauthor) { alert('Будь ласка, заповніть Назву книги та Автора') } else {

        const enteredBook = { bookName, bookauthor, bookdescription, bookStatus };
        const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
        savedBooks.push(enteredBook)
        localStorage.setItem('savedBooks', JSON.stringify(savedBooks))
    }

    form.reset();
    if (bookName && bookauthor) { alert('Книгу додано!') };
});

