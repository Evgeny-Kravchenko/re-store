import { IBookStoreService, IBook } from '../interfaces';

export default class BookstoreService implements IBookStoreService {
  getBooks(): Array<IBook> {
    return [
      {
        name: 'Big book CSS',
        author: 'McFarland',
        id: 1,
        price: '10$',
        coverImage:
          'https://lh3.googleusercontent.com/proxy/UQftiRT9zNVcy802FEL2Aa0Y_xnInR-fI8XiYeLTcsx9ci8-VfFjKqcpjLiVXATqaV5ac1GKZz0fyjTA5PLpClXBVvzv0lSJvqI_TBFj1QfMp84dgsk7xCKr-So1jTeVckPC0qGP',
      },
      {
        name: 'Decide algorithms',
        author: 'Адитья Бхаргава',
        id: 2,
        price: '5.84$',
        coverImage:
          'https://monster-book.com/sites/default/files/styles/sc290x400/public/books/grokaem-algoritmy.jpg?itok=XLKoL4bc',
      },
      {
        name: `You don't know JS `,
        author: 'Kyle Simpson',
        id: 3,
        price: '20$',
        coverImage:
          'https://images-na.ssl-images-amazon.com/images/I/41Z5kHqNo1L._SX330_BO1,204,203,200_.jpg',
      },
    ];
  }
}
