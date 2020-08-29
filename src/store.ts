import { createStore, StoreCreator } from 'redux';
import reducer from './reducers';

const store: StoreCreator = createStore(reducer);

export default store;
