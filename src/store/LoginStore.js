import { createStore } from 'redux';
import LoginReducer from '../reducer/LoginReducer';
const store = createStore(LoginReducer);
export default store;