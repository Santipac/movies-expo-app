import { HttpAdapter } from '@/config/adapters/http/http.adapters';
import { Movie } from '@/core/entities/movie.entity';
import { GeneralResponse } from '@/infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const topRatedMovies = await fetcher.get<GeneralResponse>('/top_rated');
    return topRatedMovies.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error('Error while fetching movies - Upcoming API');
  }
};
