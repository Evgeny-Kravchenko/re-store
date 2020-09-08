import { IBookStoreService, IBook } from '../interfaces';

export default class BookstoreService implements IBookStoreService {
  private data: Array<IBook> = [
    {
      name: 'Big book CSS',
      author: 'McFarland',
      id: 1,
      price: 10,
      coverImage:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fknigamir.com%2Fcatalog%2Ftekhnicheskaya-i-biznes-literatura_ID36%2Fnovaya-bolshaya-kniga-css_ID609230%2F&psig=AOvVaw3grxmUcerxXnGT1LNi0jas&ust=1599637035478000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDm77uG2esCFQAAAAAdAAAAABAP',
    },
    {
      name: 'Decide algorithms',
      author: 'Адитья Бхаргава',
      id: 2,
      price: 5.84,
      coverImage:
        'https://monster-book.com/sites/default/files/styles/sc290x400/public/books/grokaem-algoritmy.jpg?itok=XLKoL4bc',
    },
    {
      name: `You don't know JS `,
      author: 'Kyle Simpson',
      id: 3,
      price: 20,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/41Z5kHqNo1L._SX330_BO1,204,203,200_.jpg',
    },
  ];

  public getBooks(): Promise<Array<IBook>> {
    return new Promise<Array<IBook>>((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, 1000);
    });
  }
}
