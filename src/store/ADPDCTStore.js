
import { createStore } from 'redux';
import ADPDCTReducer from '../reducer/ADPDCTReducer';
const ADPDCTStore = createStore(ADPDCTReducer);
export default ADPDCTStore;