import { displayBook } from './displayBook.js';
import { Book } from './interfaces';

function search(allBooks: Book[]) {
  const queryInput = document.querySelector<HTMLInputElement>('#searchBook');
  if (!queryInput) {
    return;
  }
  
  const searchedBook = allBooks.find(book => 
    book.title.toLowerCase().includes(queryInput.value.toLowerCase())
  );
  
  if (searchedBook) {
    displayBook(undefined, searchedBook);
    queryInput.value = '';
  }
}

export { search };
