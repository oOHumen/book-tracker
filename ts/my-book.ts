import { Book } from './types/book';

const bookListContainer = document.getElementById('booklist') as HTMLElement;

if (bookListContainer) {
    const savedBooks: Book[] = JSON.parse(localStorage.getItem('savedBooks') || '[]');

    if (savedBooks.length === 0) {
        bookListContainer.innerHTML = '<p>У вас ще немає доданих книг</p>';

        const addBookButton = document.createElement('button');

        addBookButton.innerText = 'Додати книгу';
        addBookButton.onclick = () => (window.location.href = 'index.html');
        bookListContainer.appendChild(addBookButton);
    } else {
        const booksTable: HTMLTableElement = document.createElement('table');
        const booksTableHeader: HTMLTableRowElement = booksTable.insertRow();
        const statusMap: Record<string, string> = {
            reading: 'Читаю',
            read: 'Прочитав',
            willread: 'Хочу прочитати',
        };

        ['Книга', 'Автор', 'Опис', 'Статус'].forEach((tableHeader) => {
            const th: HTMLTableCellElement = document.createElement('th');

            th.innerText = tableHeader;
            booksTableHeader.appendChild(th);
        });

        savedBooks.forEach((book) => {
            const tr = booksTable.insertRow();
            const removeButton = document.createElement('button') as HTMLButtonElement;
            removeButton.innerText = 'Видалити';
            removeButton.onclick = () => {};

            tr.insertCell().innerText = book.bookName;
            tr.insertCell().innerText = book.bookauthor;
            tr.insertCell().innerText = book.bookdescription || 'Опис відсутній';
            tr.insertCell().innerText = statusMap[book.bookStatus];
            tr.insertCell().appendChild(removeButton);
        });

        bookListContainer.appendChild(booksTable);
    }
}
