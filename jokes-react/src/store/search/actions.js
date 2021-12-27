/**
 * Search global state domain actions
 */
 export const ActionTypes = {
    SEARCH_FETCH: 'SEARCH_FETCH',
    SEARCH_FETCHED: 'SEARCH_FETCHED',
  };
  
  export const searchFetch = (payload, error = null) => ({
    type: ActionTypes.SEARCH_FETCH,
    payload,
    error,
  });
  
  export const searchFetched = (payload, error = null) => ({
    type: ActionTypes.SEARCH_FETCHED,
    payload,
    error,
  });