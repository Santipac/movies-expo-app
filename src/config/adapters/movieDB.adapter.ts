import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    language: 'es',
    api_key: process.env.MOVIE_DB_API_KEY ?? '',
  },
});
