import { Movie } from '@/core/entities/movie.entity';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MoviePoster } from './moviePoster';
import { Status, isStatusLoading } from '@/presentation/utils';
import { useDebouncedCallback } from 'use-debounce';

interface HorizontalCarouselProps {
  movies: Movie[];
  title?: string;
  status: Status;
  handleNextPage?: () => void;
}

export const HorizontalCarousel = ({
  movies,
  title,
  status,
  handleNextPage,
}: HorizontalCarouselProps) => {
  const styles = useStyles({ title });

  const handleDebouncedNextPage = useDebouncedCallback(() => {
    handleNextPage && handleNextPage();
  }, 200);

  const handleInfiniteScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    if (isStatusLoading(status)) return;

    const { contentSize, contentOffset, layoutMeasurement } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
    if (!isEndReached) return;

    handleDebouncedNextPage();
  };

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={(item, index) => `${item.id} - ${index}`}
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={handleInfiniteScroll}
      />
    </View>
  );
};

type StylesProps = { title?: string };

function useStyles({ title }: StylesProps) {
  return StyleSheet.create({
    container: {
      height: title ? 260 : 220,
    },
    title: {
      fontSize: 30,
      fontWeight: '300',
      marginLeft: 10,
      marginBottom: 10,
    },
  });
}