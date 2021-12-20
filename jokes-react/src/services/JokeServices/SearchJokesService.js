import axios from 'axios';

const searchJokes = `${process.env.REACT_APP_API_URL}/search-jokes`


class SearchJokeService {
    async searchJokes (query) {
        const response = await axios.get(searchJokes, { params: { query } });
        return response.data;
    }
}

export default new SearchJokeService();