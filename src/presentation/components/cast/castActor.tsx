import { Cast } from '@/core/entities/cast.entity';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface CastActorProps {
  actor: Cast;
}

export function CastActor({ actor }: CastActorProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: actor.avatar }} style={styles.image} />
      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.actorCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    display: 'flex',
    flexDirection: 'column',
    width: 100,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
  actorName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  actorCharacter: {
    fontSize: 12,
    opacity: 0.7,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
});
