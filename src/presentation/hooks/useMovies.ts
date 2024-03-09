import * as UseCases from '@/core/use-cases';
import { Movie } from '@/core/entities/movie.entity';
import { movieDBFetcher } from '@/config/adapters/movieDB.adapter';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

const infiniteQueryOptions = {
  initialPageParam: 1,
  getNextPageParam: (
    lastPage: Movie[],
    _allPages: Movie[][],
    lastPageParam: number
  ) => {
    if (lastPage.length === 0) {
      return undefined;
    }
    return lastPageParam + 1;
  },
  getPreviousPageParam: (
    _firstPage: Movie[],
    _allPages: Movie[][],
    firstPageParam: number
  ) => {
    if (firstPageParam <= 1) {
      return undefined;
    }
    return firstPageParam - 1;
  },
};

export const useMovies = () => {
  const nowPlaying = useQuery({
    queryKey: ['get_now_playing'],
    queryFn: () => {
      return UseCases.moviesNowPlayingUseCase(movieDBFetcher());
    },
    initialData: [],
  });

  const popular = useInfiniteQuery({
    queryKey: ['popular'],
    queryFn: async ({ pageParam }) =>
      await UseCases.moviesPopularUseCase(movieDBFetcher({ page: pageParam })),
    ...infiniteQueryOptions,
  });

  const upcoming = useInfiniteQuery({
    queryKey: ['get_upcoming'],
    queryFn: ({ pageParam }) => {
      return UseCases.moviesUpcomingUseCase(
        movieDBFetcher({ page: pageParam })
      );
    },
    ...infiniteQueryOptions,
  });

  const topRated = useInfiniteQuery({
    queryKey: ['get_top_rated'],
    queryFn: ({ pageParam }) => {
      return UseCases.moviesTopRatedUseCase(
        movieDBFetcher({ page: pageParam })
      );
    },
    ...infiniteQueryOptions,
  });

  return { nowPlaying, topRated, popular, upcoming };
};