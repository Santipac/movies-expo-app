import { HttpAdapter } from '@/config/adapters/http/http.adapters';
import { Movie } from '@/core/entities/movie.entity';
import { GeneralResponse } from '@/infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter
): Promise<Movie[]> => {
  try {
    const upcomingMovies = await fetcher.get<GeneralResponse>('/upcoming');
    return upcomingMovies.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error('Error while fetching movies - Upcoming API');
  }
};
