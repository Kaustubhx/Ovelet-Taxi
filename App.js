import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from './screens/OnBoardingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import store from './store'
import { KeyboardAvoidingView } from 'react-native';
import { auth } from './firebase';

const Stack = createStackNavigator();

export default function App() {
  const userAuth = auth.currentUser;

  return (
    <NavigationContainer>
      <Provider store={store}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? 'padding' : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          style={{ flex: 1 }}
        >
          <Stack.Navigator>
            {!userAuth && (
              <>
                <Stack.Screen name='BoardingScreen' component={OnBoardingScreen} />
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
              </>
            )}
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </Provider>
    </NavigationContainer>
  );
}


