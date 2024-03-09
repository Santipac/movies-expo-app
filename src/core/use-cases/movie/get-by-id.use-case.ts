import { HttpAdapter } from '@/config/adapters/http/http.adapters';
import { ResultMovieDetails } from '@/infrastructure/interfaces/movie-db.responses';
import type { FullMovie } from '@/core/entities/movie.entity';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

export const getByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number
): Promise<FullMovie> => {
  try {
    const movie = await fetcher.get<ResultMovieDetails>(`/${movieId}`);
    return MovieMapper.fromMovieDetailsResultToEntity(movie);
  } catch (error) {
    console.error(error);
    throw new Error(`Cannot get movie by id - ${movieId}`);
  }
};
