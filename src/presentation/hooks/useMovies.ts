import { useQuery } from '@tanstack/react-query';
import * as UseCases from '@/core/use-cases';
import { movieDBFetcher } from '@/config/adapters/movieDB.adapter';

export const useMovies = () => {
  const { data, status, refetch } = useQuery({
    queryKey: ['get_movies'],
    queryFn: () => {
      return UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    },
  });

  return { movies: data, status, refetch };
};
