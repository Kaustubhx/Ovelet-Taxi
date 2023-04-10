import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../components/Home';
import NotificationScreen from './NotificationScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { Bars3Icon, BellIcon, ClockIcon, Cog8ToothIcon, CreditCardIcon, HomeIcon } from 'react-native-heroicons/outline';
import CustomDrawer from '../components/CustomDrawer';
import PaymentScreen from './PaymentScreen';
import TravelHistoryScreen from './TravelHistoryScreen';
import SettingsScreen from './SettingsScreen';
import UserScreen from './UserScreen';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <Drawer.Navigator
            initialRouteName='Home'
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerTitleStyle: { color: '#fff' },
                headerTitleAlign: 'center',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
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
            <Drawer.Screen
                name='Home'
                component={Home}
                options={{
                    drawerIcon: () => (
                        <HomeIcon size={28} color='white' />
                    )
                }}
            />
            <Drawer.Screen
                name="Payment"
                component={PaymentScreen}
                options={{
                    drawerIcon: () => (
                        <CreditCardIcon size={28} color='white' />
                    )
                }}
            />
            <Drawer.Screen
                name="History"
                component={TravelHistoryScreen}
                options={{
                    drawerIcon: () => (
                        <ClockIcon size={28} color='white' />
                    )
                }}
            />
            <Drawer.Screen
                name='Notification'
                component={NotificationScreen}
                options={{
                    drawerIcon: () => (
                        <BellIcon size={28} color='white' />
                    )
                }}
            />
            <Drawer.Screen
                name='Settings'
                component={SettingsScreen}
                options={{
                    drawerIcon: () => (
                        <Cog8ToothIcon size={28} color='white' />
                    )
                }}
            />
            <Drawer.Screen
                name='UserScreen'
                component={UserScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Cog8ToothIcon size={28} color='white' />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

export default HomeScreen