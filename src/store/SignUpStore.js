import { createStore } from 'redux';
import SignUpReducer from '../reducer/SignUpReducer';
const store = createStore(SignUpReducer);
export default store;