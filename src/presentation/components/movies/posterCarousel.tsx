import { Movie } from '@/core/entities/movie.entity';
import { ScrollView, Text, View } from 'react-native';
import { MoviePoster } from './moviePoster';

type PosterCarouselProps = {
  movies: Movie[];
  height?: number;
};

export const PosterCarousel = ({
  movies,
  height = 440,
}: PosterCarouselProps) => {
  return (
    <View style={{ height }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviePoster movie={movie} key={movie.id} />
        ))}
      </ScrollView>
    </View>
  );
};