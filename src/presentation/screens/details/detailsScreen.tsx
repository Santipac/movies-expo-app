import { MovieHeader } from '@/presentation/components/movie';
import { useMovie } from '@/presentation/hooks/useMovie';
import { RootStackParams } from '@/presentation/navigation/stackNavigator';
import { isStatusLoading } from '@/presentation/utils';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  const { movie } = useMovie(movieId);
  const inserts = useSafeAreaInsets();
  const styles = useStyles(inserts);

  if (movie.data === undefined || isStatusLoading(movie.status)) {
    return (
      <View style={styles.container}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MovieHeader
        title={movie.data.title}
        ogTitle={movie.data.originTitle}
        moviePoster={movie.data.poster}
      />
    </View>
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
