/**
 * Generate store context and state
 */
 import { useContext } from 'react';
import { Store } from './Provider/index';
 
 /**
  * Export global state hook
  */
 // eslint-disable-next-line import/no-anonymous-default-export
 export default () => useContext(Store);