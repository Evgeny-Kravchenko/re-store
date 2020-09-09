import IShoppingCartItem from './shopping-cart-item.interface';

type ActionItem = (id: number) => void;

export default interface IPropsShoppingCartTable {
  items: Array<IShoppingCartItem>;
  total: number;
  onIncrease: ActionItem;
  onDecrease: ActionItem;
  bookDeleteFromCart: ActionItem;
}
