import {ADD_GROCERY} from '../actions';
import groceryItemList from '../data/groceryItems.json'

export default function grocery(state = groceryItemList , action){
    switch (action.type) {
      case ADD_GROCERY:
      console.log("Add Grocery Clicked",action)
      let grocery = state.filter(item=>item.id !== action.id);
      return grocery
      default:
        return state;
    }
  }
