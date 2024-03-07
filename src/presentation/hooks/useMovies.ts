import { useQuery } from '@tanstack/react-query';
import * as UseCases from '@/core/use-cases';
import { movieDBFetcher } from '@/config/adapters/movieDB.adapter';

export const useMovies = () => {

  const nowPlaying = useQuery({
    queryKey: ['get_now_playing'],
    queryFn: () => {
      return UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    },
  });

  const popular = useQuery({
    queryKey: ['get_popular'],
    queryFn: () => {
      return UseCases.moviesPopularUseCase(movieDBFetcher);
    },
  });

  const upcoming = useQuery({
    queryKey: ['get_upcoming'],
    queryFn: () => {
      return UseCases.moviesUpcomingUseCase(movieDBFetcher);
    },
  });
  
  const topRated = useQuery({
    queryKey: ['get_top_rated'],
    queryFn: () => {
      return UseCases.moviesTopRatedUseCase(movieDBFetcher);
    },
  });

  return { nowPlaying, topRated, popular, upcoming };
};
