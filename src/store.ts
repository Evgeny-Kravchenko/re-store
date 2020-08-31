import { createStore, Store } from 'redux';
import reducer from './reducers';

const store: Store = createStore(reducer);

export default store;
