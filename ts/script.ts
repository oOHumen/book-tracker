import { Book } from './types/book';

const form = document.querySelector('form') as HTMLFormElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const bookName = (document.getElementById('bookname') as HTMLInputElement).value.trim();
    const bookauthor = (document.getElementById('bookauthor') as HTMLInputElement).value.trim();
    const bookdescription = (
        document.getElementById('bookdescription') as HTMLTextAreaElement
    ).value.trim();
    const bookStatus = (document.getElementById('bookstatus') as HTMLSelectElement).value;

    if (!bookName || !bookauthor) {
        alert('Будь ласка, заповніть Назву книги та Автора');
    } else {
        const enteredBook: Book = { bookName, bookauthor, bookdescription, bookStatus };
        const savedBooks: Book[] = JSON.parse(localStorage.getItem('savedBooks') ?? '[]');
        savedBooks.push(enteredBook);
        localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
    }

    form.reset();

    if (bookName && bookauthor) {
        alert('Книгу додано!');
    }
});
