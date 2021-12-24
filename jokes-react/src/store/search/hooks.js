/**
 * Search state hooks
 */
import SearchJokesService from '../../services/JokeServices/SearchJokesService';
import useStore from '../index';
import {
    searchFetch,
    searchFetched
} from './actions';
// import { create, destroy, get, update } from '~/helpers/request';
// import routeName from '~/helpers/routes';

/**
 * searchJokes global state hook
 */
export const useSearch = () => { // eslint-disable-line
    const { state: { search }, dispatch } = useStore();

    const fetchSearch = async params => {
        /**
         * Trigger search data loading state
         */
        dispatch(searchFetch());

        let entities;
        try {
            /**
             * Fetch the entities
             */
            entities = await SearchJokesService.searchJokes(params);

            /**
             * Fill in the reducer with the fetched entities
             */
            dispatch(searchFetched(entities));
        } catch (error) {
            dispatch(searchFetched(null, error));
        }
    };

    return {
        search,
        useSearch,
        fetchSearch,
    };
};