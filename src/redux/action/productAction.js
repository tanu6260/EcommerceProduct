import axios from 'axios';
import {ADD_ITEM, GET_ITEMS} from '../type';


export const getItemsAction = () => {
  return async dispatch => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log('response' , response?.data)
      dispatch({type: GET_ITEMS, payload: response.data});
    } catch (error) {
      console.error(error);
    }
  };
};

export const addItemAction = item => ({
  type: ADD_ITEM,
  payload: item,
});
