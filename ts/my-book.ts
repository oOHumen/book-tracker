import { Book } from './types/book';

const bookListContainer = document.getElementById('booklist') as HTMLElement;

if (bookListContainer) {
    const savedBooks: Book[] = JSON.parse(localStorage.getItem('savedBooks') || '[]');

    if (savedBooks.length === 0) {
        bookListContainer.innerHTML = '<p>У вас ще немає доданих книг</p>';

        const addBookButton = document.createElement('button');

        addBookButton.innerText = 'Додати книгу';
        addBookButton.onclick = () => (window.location.href = '../index.html');
        bookListContainer.appendChild(addBookButton);
    } else {
        const booksTable: HTMLTableElement = document.createElement('table');

        booksTable.style.border = '1px solid black';
        booksTable.style.width = '100%';

        const booksTableHeader: HTMLTableRowElement = booksTable.insertRow();

        ['Книга', 'Автор', 'Опис', 'Статус'].forEach((tableHeader) => {
            const th: HTMLTableCellElement = document.createElement('th');

            th.innerText = tableHeader;
            booksTableHeader.appendChild(th);
        });

        savedBooks.forEach((book) => {
            const tr = booksTable.insertRow();

            tr.insertCell().innerText = book.bookName;
            tr.insertCell().innerText = book.bookauthor;
            tr.insertCell().innerText = book.bookdescription || 'Опис відсутній';
            tr.insertCell().innerText = book.bookStatus;
        });

        bookListContainer.appendChild(booksTable);
    }
}
