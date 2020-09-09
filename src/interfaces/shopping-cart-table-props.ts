import IShoppingCartItem from './shopping-cart-item.interface';

type ActionItem = (id: number) => void;

export default interface IPropsShoppingCartTable {
  items: Array<IShoppingCartItem | undefined>;
  total: number;
  onIncrease: ActionItem;
  onDecrease: ActionItem;
  onDelete: ActionItem;
}
