import axios from 'axios';

const randomJokeUrl = `${process.env.REACT_APP_API_URL}/random-joke`;

class RandomJokeService {
    getRandomJoke = () => {
        return axios.get(randomJokeUrl);
    }
}

export default new RandomJokeService();