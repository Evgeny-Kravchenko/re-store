import { createStore, Store, applyMiddleware, Middleware } from 'redux';
import reducer from './reducers';
import IAction from './interfaces/action.interface';

const logMiddleware: Middleware = () => (next) => (action: IAction) => {
  console.log(action.type);
  return next(action);
};

const stringMiddleware: Middleware = () => (next) => (action: IAction | string) => {
  if (typeof action === 'string') {
    return next({ type: action });
  }
  return next(action);
};

const store: Store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware));

export default store;
