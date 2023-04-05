import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core';
import { Bars3Icon, BellIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';

const PaymentScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerTitleStyle: { color: '#fff' },
            headerBackground: () => (
                <LinearGradient
                    start={{ x: -1, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ flex: 1 }}
                    colors={['#3b82f6', '#4f46e5']}
                />
            ),
            headerLeft: () => (
                <Bars3Icon size={32} color='white' style={{ marginLeft: 20 }} onPress={() => navigation.openDrawer()} />
            ),
            headerRight: () => (
                <BellIcon size={32} color='white' style={{ marginRight: 20 }} />
            )
        })
    }, [])

    return (
        <View>
            <Text>PaymentScreen</Text>
        </View>
    )
}

export default PaymentScreen