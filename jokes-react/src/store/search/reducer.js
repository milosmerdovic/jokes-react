/**
 * Companies global state reducer
 */
 import produce from 'immer';
import { GlobalTypes } from '../actions';
import { ActionTypes } from './actions';
 
 export const initialState = {
   isLoading: false,
   entities: [],
   error: null,
 };
 
 export const reducer = function searchReducer (state = initialState, action = {}) {
   const { type, payload = [], error = null } = action;
 
   return produce(state, draft => {
     switch (type) {
     case ActionTypes.SEARCH_FETCH:
       draft.isLoading = true;
       break;
     case ActionTypes.SEARCH_FETCHED:
       draft.isLoading = false;
       draft.entities = !error ? payload : [];
       // console.log('This is payload ', payload);
       draft.error = error;
       break;
     case GlobalTypes.STORE_RESET:
       Object.assign(draft, initialState);
       break;
     default:
       break;
     }
   });
 };