// import {ADD_TO_ITEM, GET_ALL_PRODUCT} from '../type';

import { ADD_ITEM, GET_ITEMS } from "../type";

// const initialState = {
//   getAllItem: null,
//   addToCartItem: null,
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case GET_ALL_PRODUCT:
//       return {
//         ...state,
//         getAllItem: action.payload,
//       };
//     case ADD_TO_ITEM:
//       return {
//         ...state,
//         addToCartItem: action.payload,
//       };

//     default:
//       return state;
//   }
// };


const initialState = {
  items: [],
  cartItems: [],
  loading: false,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_ITEMS:
          return {
              ...state,
              items: action.payload,
              loading: false,
          };
      case ADD_ITEM:
        return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
        };
      default:
          return state;
  }
};

export default itemReducer;

