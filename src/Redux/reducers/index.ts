export const reducer = function (state: any, action: any) {
  switch (action.type) {
    case 'ADD':
      return { books: [...state.books, action.book] };
    case 'REMOVE':
      return { books: state.books.filter((book: any) => book.id !== action.bookId) };
    default:
      return state;
  }
};
