import {ADD_GROCERY} from '../actions';
import groceryItemList from '../data/groceryItems.json'

export default function grocery(state = [] , action){
    switch (action.type) {
      case ADD_GROCERY:
      let shoppingBage = [...state, addToBage(action.id)];
      console.log("shopping bag should be populated with",shoppingBage)
      return shoppingBage;
      default:
        return state;
    }
  }

function addToBage(id){
  let item = groceryItemList.find((item)=> item.id === id)
  return item;
}
