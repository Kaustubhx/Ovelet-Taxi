import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { Bars3Icon, BellIcon, ChevronRightIcon } from 'react-native-heroicons/outline';
import { useEffect } from 'react';
import { Image } from 'react-native';
import { selectUser } from '../slices/userSlice';
import { useSelector } from 'react-redux';

const SettingsScreen = () => {
    const user = useSelector(selectUser)
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
        <View className='m-5 bg-white rounded-lg'>
            <View className='p-5 flex-row items-center justify-between'>
                <View className='flex-row'>
                    <Image
                        source={require('../assets/user-1.jpg')}
                        className='h-14 w-14 rounded-lg'
                    />
                    <View className='ml-3'>
                        <Text className='text-base font-bold'>Antonio Raymond</Text>
                        <Text className='text-gray-400 font-sm'>{user?.email}</Text>
                    </View>
                </View>
                <ChevronRightIcon size={22} color='#9ca3af' />
            </View>
        </View>
    )
}

export default SettingsScreen