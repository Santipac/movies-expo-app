import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export function FullScreenLoader() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="indigo" />
    </View>
  );
}
