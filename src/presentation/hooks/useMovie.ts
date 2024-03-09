import { useQuery } from '@tanstack/react-query';
import * as UseCases from '@/core/use-cases';
import { movieDBFetcher } from '@/config/adapters/movieDB.adapter';

export const useMovie = (movieId: number) => {
  const movie = useQuery({
    queryKey: ['Get movie'],
    queryFn: () => UseCases.getByIdUseCase(movieDBFetcher(), movieId),
  });

  return { movie };
};

