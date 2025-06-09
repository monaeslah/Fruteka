import axios from 'axios';

const apiKey = process.env.TMDB_API_KEY;

const apiClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        language: 'es-ES',
    },
    headers: {
        Authorization: `Bearer ${apiKey}`,
    },
});

export default apiClient;
