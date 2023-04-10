import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { useEffect } from 'react';
import { BanknotesIcon, Bars3Icon, BellIcon, CheckIcon } from 'react-native-heroicons/outline';
import { TicketIcon } from 'react-native-heroicons/solid';

const NotificationScreen = () => {
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
        <View className='m-5 rounded-lg'>
            <View className='p-5 flex-row items-center bg-white mb-5 rounded-lg space-x-3'>
                <View className='items-center justify-center h-10 w-10 rounded-full bg-indigo-50'>
                    <TicketIcon size={28} color='#4f46e5' rotation={145} />
                </View>
                <View className='flex-1'>
                    <Text className='text-base font-semibold mb-1'>Get 3 Free Coupons Now!</Text>
                    <Text className='text-gray-400 text-sm tracking-wide'>Just invite your 3 friends, and you will get 3 free coupons code.</Text>
                </View>
            </View>
            <View className='p-5 flex-row items-center bg-white mb-5 rounded-lg space-x-3'>
                <View className='items-center justify-center h-10 w-10 rounded-full bg-green-50'>
                    <CheckIcon size={28} color='#22c55e' />
                </View>
                <View className='flex-1'>
                    <Text className='text-base font-semibold mb-1'>Booking Successfully!</Text>
                    <Text className='text-gray-400 text-sm tracking-wide'>Just invite your 3 friends, and you will get 3 free coupons code.</Text>
                </View>
            </View>
            <View className='p-5 flex-row items-center bg-white mb-5 rounded-lg space-x-3'>
                <View className='items-center justify-center h-10 w-10 rounded-full bg-indigo-50'>
                    <TicketIcon size={28} color='#4f46e5' rotation={145} />
                </View>
                <View className='flex-1'>
                    <Text className='text-base font-semibold mb-1'>Only Today!</Text>
                    <Text className='text-gray-400 text-sm tracking-wide'>Just invite your 3 friends, and you will get 3 free coupons code.</Text>
                </View>
            </View>
            <View className='p-5 flex-row items-center bg-white mb-5 rounded-lg space-x-3'>
                <View className='items-center justify-center h-10 w-10 rounded-full bg-orange-50'>
                    <BanknotesIcon size={28} color='#f97316' rotation={145} />
                </View>
                <View className='flex-1'>
                    <Text className='text-base font-semibold mb-1'>Transaction complete</Text>
                    <Text className='text-gray-400 text-sm tracking-wide'>Just invite your 3 friends, and you will get 3 free coupons code.</Text>
                </View>
            </View>
        </View>
    )
}

export default NotificationScreen