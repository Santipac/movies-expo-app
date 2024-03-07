import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';


export const HomeScreen: React.FC = () => {
  const inserts = useSafeAreaInsets()
  const styles = useStyles(inserts)
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

function useStyles(inserts: EdgeInsets) {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginTop: inserts.top,
      marginBottom: inserts.bottom,
    }
  })
}