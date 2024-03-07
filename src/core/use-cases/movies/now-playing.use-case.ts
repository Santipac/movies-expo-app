import { HttpAdapter } from '@/config/adapters/http/http.adapters';
import { NowPlayingResponse } from '@/infrastructure/interfaces/movie-db.responses';
import type { Movie } from '@/core/entities/movie.entity';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
    return nowPlaying.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      backdrop: movie.backdrop_path,
      poster: movie.poster_path,
      rating: movie.vote_average,
      releaseDate: movie.release_date,
    }));
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching movies - Now Playing');
  }
};
// https://api.themoviedb.org/3/movie/now_playing?language=es&api_key=
