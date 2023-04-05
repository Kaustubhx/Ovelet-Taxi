import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { useEffect } from 'react';
import { Bars3Icon, BellIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Bars3Icon size={32} color='white' style={{ marginLeft: 20 }} onPress={() => navigation.openDrawer()} />
            ),
            headerRight: () => (
                <BellIcon size={32} color='white' style={{ marginRight: 20 }} onPress={() => navigation.navigate('Notification')} />
            )
        })
    }, [])

    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home