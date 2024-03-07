import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home/homeScreen';
import { DetailsScreen } from '../screens/details/detailsScreen';

export type RootStackParams = {
  Home: undefined;
  Details: { movieId: number };
};

const Stack = createNativeStackNavigator<RootStackParams>();

export function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
