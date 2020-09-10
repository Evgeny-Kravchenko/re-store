import { createStore, Store } from 'redux';
import reducer from './reducers';

const enhancer = (createStore: any) => (reducer: any) => {
  const store = createStore(reducer);
  const originalDispatch = store.dispatch;
  store.dispatch = <A>(action: A | string) => {
    if (typeof action === 'string') {
      return originalDispatch({ type: action });
    }
    return originalDispatch(action);
  };
  return store;
};

const store: Store = createStore(reducer, enhancer);

export default store;
