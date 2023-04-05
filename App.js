import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import store from './store'
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from './screens/OnBoardingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name='BoardingScreen' component={OnBoardingScreen} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}


