import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/homeScreen';
import { DetailsScreen } from '../screens/details/detailsScreen';

export type RootStackParams = {
  Home: undefined;
  Details: { movieId: number };
};

const Stack = createStackNavigator<RootStackParams>();

export function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
