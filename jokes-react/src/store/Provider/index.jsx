/**
 * Global state provider
 */
 import PropTypes from 'prop-types';
import React, { createContext, useReducer } from 'react';
import reducers, { initialState } from '../reducers';
 
 /**
  * Create store context
  */
 export const Store = createContext();
 
 /**
  * Create a Store.Provider wrapper component
  */
 const Provider = ({ children }) => {
   const [state, dispatch] = useReducer(reducers, initialState);
 
   return <Store.Provider value={ { state, dispatch } }>{children}</Store.Provider>;
 };
 
 Provider.propTypes = {
   children: PropTypes.oneOfType([
     PropTypes.arrayOf(PropTypes.node),
     PropTypes.node,
   ]),
 };
 
 Provider.defaultProps = {
   children: null,
 };
 
 export default Provider;