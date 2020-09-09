import IShoppingCartItem from '../interfaces/shopping-cart-item.interface';
import IBook from '../interfaces/book.interface';

const updateCartItems = (
  existingBook: IShoppingCartItem | undefined,
  book: IBook | undefined,
  cartItems: Array<IShoppingCartItem | undefined>
): Array<IShoppingCartItem | undefined> => {
  if (book) {
    if (existingBook) {
      return cartItems.map((item: IShoppingCartItem | undefined) => {
        if (item && item.id === existingBook.id) {
          item.total = Number((item?.total + book.price).toFixed(2));
          item.count = item?.count + 1;
        }
        return item;
      });
    }
    const newItem: IShoppingCartItem = {
      id: book.id,
      title: book.name,
      total: book.price,
      count: 1,
    };
    return [...cartItems, newItem];
  }
  return [];
};

export default updateCartItems;
