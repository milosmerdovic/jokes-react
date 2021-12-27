/* eslint-disable import/max-dependencies */
/**
 * Combine hooks reducers
 */
 import * as search from './search/reducer';
 
 
 export const initialState = {
   search: search.initialState,
 };
 
 /**
  * Combine reducers
  */
 // eslint-disable-next-line import/no-anonymous-default-export
 export default (state, action) => ({
   search: search.reducer(state.search, action),
 });