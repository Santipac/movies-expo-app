import { HttpAdapter } from '@/config/adapters/http/http.adapters';
import { NowPlayingResponse } from '@/infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';
import type { Movie } from '@/core/entities/movie.entity';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
    const movies = nowPlaying.results.map( MovieMapper.fromMovieDBResultToEntity );
    return movies;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching movies - Now Playing');
  }
};

