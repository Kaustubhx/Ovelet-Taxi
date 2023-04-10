import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import User from '../components/User';
import { LinearGradient } from 'expo-linear-gradient';

const Stack = createStackNavigator();

const UserScreen = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleStyle: { color: '#fff' },
            headerTitleAlign: 'center',
            drawerLabelStyle: {
                color: '#fff',
            },
            headerBackground: () => (
                <LinearGradient
                    start={{ x: -1, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ flex: 1 }}
                    colors={['#3b82f6', '#4f46e5']}
                />
            ),
        }}>
            <Stack.Screen name='Profile' component={User} />
        </Stack.Navigator>
    )
}

export default UserScreen
