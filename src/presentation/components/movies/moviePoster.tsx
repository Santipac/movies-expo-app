import { Movie } from '@/core/entities/movie.entity';
import { RootStackParams } from '@/presentation/navigation/stackNavigator';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View, StyleSheet, Pressable } from 'react-native';

type MoviePosterProps = {
  movie: Movie;
  height?: number;
  width?: number;
};

export const MoviePoster = ({
  movie,
  height = 420,
  width = 300,
}: MoviePosterProps) => {
  const { navigate } = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <Pressable
      onPress={() => navigate('Details', { movieId: movie.id })}
      style={({ pressed }) => ({
        width,
        height,
        opacity: pressed ? 0.9 : 1,
        marginHorizontal: 4,
        paddingBottom: 20,
        paddingHorizontal: 4,
      })}
    >
      <View style={styles.imageCtn}>
        <Image source={{ uri: movie.poster }} style={styles.image} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageCtn: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },

    shadowRadius: 7,
    elevation: 9,
  },
});