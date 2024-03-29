import { FullScreenLoader } from '@/presentation/components/loaders/fullScreenLoader';
import { MovieHeader } from '@/presentation/components/movie';
import MovieDetails from '@/presentation/components/movie/movieDetails';
import { useMovie } from '@/presentation/hooks/useMovie';
import { RootStackParams } from '@/presentation/navigation/stackNavigator';
import { isStatusLoading } from '@/presentation/utils';
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView, StyleSheet } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  const { movie, cast } = useMovie(movieId);
  const inserts = useSafeAreaInsets();
  const styles = useStyles(inserts);

  if (isStatusLoading(movie.status) || isStatusLoading(cast.status)) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView style={styles.container}>
      <MovieHeader
        title={movie.data!.title}
        ogTitle={movie.data!.originTitle}
        moviePoster={movie.data!.poster}
      />
      <MovieDetails movie={movie.data!} cast={cast.data!} />
    </ScrollView>
  );
};

function useStyles(inserts: EdgeInsets) {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginTop: inserts.top,
      marginBottom: inserts.bottom,
    },
  });
}
