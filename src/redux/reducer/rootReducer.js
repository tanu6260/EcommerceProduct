import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
// import product from './itemReducer';


const rootReducer = combineReducers({
 product ,
 itemReducer
});

export default rootReducer;

