import axios from 'axios';

const jokesUrl = `${process.env.REACT_APP_API_URL}/jokes`;


class JokesService {
    getAllJokes = () => {
        return axios.get(jokesUrl);
    }
}

export default new JokesService();