import grocery from './grocery_reducer';
import shoppingBage from './shopingBag_reducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  grocery,
  shoppingBage
})

export default rootReducer;
