import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  PosterCarousel,
  HorizontalCarousel,
} from '@/presentation/components/movies';
import { useMovies } from '@/presentation/hooks/useMovies';
import { isStatusLoading } from '@/presentation/utils';

export const HomeScreen: React.FC = () => {
  const inserts = useSafeAreaInsets();
  const styles = useStyles(inserts);

  const { nowPlaying, popular, topRated, upcoming } = useMovies();

  return (
    <ScrollView style={styles.container}>
      {isStatusLoading(nowPlaying.status) || nowPlaying.data === undefined ? (
        <Text>Cargando estrenos...</Text>
      ) : (
        <PosterCarousel movies={nowPlaying.data} />
      )}

      {isStatusLoading(popular.status) || popular.data === undefined ? (
        <Text>Cargando más populares...</Text>
      ) : (
        <HorizontalCarousel
          movies={popular.data.pages.flatMap(sub => sub)}
          status={popular.status}
          title="Populares"
          handleNextPage={popular.fetchNextPage}
        />
      )}
      {isStatusLoading(topRated.status) || topRated.data === undefined ? (
        <Text>Cargando mejor calificadas...</Text>
      ) : (
        <HorizontalCarousel
          movies={topRated.data.pages.flatMap(sub => sub)}
          status={topRated.status}
          title="Mejor Calificadas"
          handleNextPage={topRated.fetchNextPage}
        />
      )}
      {isStatusLoading(upcoming.status) || upcoming.data === undefined ? (
        <Text>Cargando Próximos estrenos...</Text>
      ) : (
        <HorizontalCarousel
          movies={upcoming.data.pages.flatMap(sub => sub)}
          status={upcoming.status}
          title="Próximamente"
          handleNextPage={upcoming.fetchNextPage}
        />
      )}
    </ScrollView>
  );
};

function useStyles(inserts: EdgeInsets) {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginTop: inserts.top + 24,
      marginBottom: inserts.bottom,
    },
  });
}
