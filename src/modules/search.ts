import { displayBook } from './show.js';
import { Book } from './faces';

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
