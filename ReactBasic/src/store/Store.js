import { createStore } from 'redux';

import Reducer from '../reducer/Reducer';

const store = createStore(Reducer);
console.log("Store started");
export default store;