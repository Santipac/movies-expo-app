import { HttpAdapter } from '@/config/adapters/http/http.adapters';
import { Movie } from '@/core/entities/movie.entity';
import { GeneralResponse } from '@/infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter
): Promise<Movie[]> => {
  try {
    const popularMovies = await fetcher.get<GeneralResponse>('/popular');
    return popularMovies.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error('Error while fetching movies - Popular API');
  }
};
