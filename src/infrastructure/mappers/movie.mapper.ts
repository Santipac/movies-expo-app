import { FullMovie, Movie } from '@/core/entities/movie.entity';
import type {
  Result,
  ResultMovieDetails,
} from '../interfaces/movie-db.responses';

export class MovieMapper {
  static fromMovieDBResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      rating: result.vote_average,
      releaseDate: result.release_date,
    };
  }
  static fromMovieDetailsResultToEntity(result: ResultMovieDetails): FullMovie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      rating: result.vote_average,
      releaseDate: result.release_date,
      budget: result.budget,
      duration: result.runtime,
      genres: result.genres.map(g => g.name),
      originTitle: result.original_title,
      productionCompanies: result.production_companies.map(pc => pc.name),
    };
  }
}
