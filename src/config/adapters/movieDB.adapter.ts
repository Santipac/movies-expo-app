import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = (params?: Record<string, unknown>) =>
  new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
      language: 'es',
      api_key: process.env.EXPO_PUBLIC_MOVIE_DB_API_KEY ?? '',
      ...params,
    },
  });
