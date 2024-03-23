import React from 'react';
import { View, Text, FlatList } from 'react-native';
import type { FullMovie } from '@/core/entities/movie.entity';
import type { Cast } from '@/core/entities/cast.entity';
import { Formatter } from '@/config/helpers/formatter';
import { CastActor } from '../cast/castActor';

interface MovieDetailsProps {
  movie: FullMovie;
  cast: Cast[];
}

export default function MovieDetails({ movie, cast }: MovieDetailsProps) {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text>{movie.rating}</Text>
          <Text style={{ marginLeft: 5 }}>- {movie.genres.join(', ')}</Text>
        </View>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Historia
        </Text>
        <Text style={{ fontSize: 16 }}>{movie.description}</Text>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Presupuesto
        </Text>
        <Text style={{ fontSize: 16 }}>{Formatter.currency(movie.budget)}</Text>
      </View>
      <View style={{ marginTop: 10, marginBottom: 50, marginHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 23,
            marginVertical: 10,
            fontWeight: 'bold',
          }}
        >
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={actor => actor.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CastActor actor={item} />}
        />
      </View>
    </>
  );
}
