import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './ducks/rootReducer';

const middleWare: any[] = [];
//@ts-ignore
const store: Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;