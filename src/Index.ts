import { getBooks } from './modules/api.js';
import { Book } from './modules/faces.js';
import { populateBooks } from './modules/ids.js';
import { search } from './modules/search.js';

async function main() {
  const allBooks: Book[] = await getBooks();
  populateBooks(allBooks);

  const searchButton = document.querySelector<HTMLButtonElement>('.search__submit');
  if (!searchButton) {
    return;
  }

  searchButton.addEventListener('click', () => search(allBooks));
}

main();
