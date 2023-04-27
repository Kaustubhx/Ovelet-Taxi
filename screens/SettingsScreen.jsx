import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { Bars3Icon, BellIcon, BookmarkIcon, ChevronRightIcon, EnvelopeIcon, GlobeAltIcon, LifebuoyIcon, ShieldCheckIcon } from 'react-native-heroicons/outline';
import { useEffect } from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { selectUser } from '../slices/userSlice';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';

const SettingsScreen = () => {
    const user = useSelector(selectUser);
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Bars3Icon size={32} color='white' style={{ marginLeft: 20 }} onPress={() => navigation.openDrawer()} />
            ),
            headerRight: () => (
                <BellIcon size={32} color='white' style={{ marginRight: 20 }} onPress={() => navigation.navigate('Notification')} />
            )
        });
    }, []);


    return (
        <View className='m-5 rounded-lg'>
            <TouchableOpacity
                className='p-5 flex-row items-center justify-between bg-white mb-7 rounded-lg'
                onPress={() => navigation.navigate('EditProfile')}

            >
                <View className='flex-row'>
                    <Image
                        source={{ uri: auth.currentUser?.photoURL }}
                        className='h-14 w-14 rounded-lg'
                    />
                    <View className='ml-3'>
                        <Text className='text-base font-bold'>{auth.currentUser?.displayName}</Text>
                        <Text className='text-gray-400 font-sm'>{user?.email}</Text>
                    </View>
                </View>
                <ChevronRightIcon size={22} color='#9ca3af' />
            </TouchableOpacity>

            <TouchableOpacity className='p-5 flex-row items-center justify-between bg-white mb-3 rounded-lg'>
                <View className='flex-row items-center space-x-3'>
                    <BellIcon size={28} color='#4f46e5' />
                    <Text className='font-semibold text-base'>
                        Notification
                    </Text>
                </View>
                <ChevronRightIcon size={22} color='#9ca3af' />
            </TouchableOpacity>
            <TouchableOpacity className='p-5 flex-row items-center justify-between bg-white mb-3 rounded-lg'>
                <View className='flex-row items-center space-x-3'>
                    <ShieldCheckIcon size={28} color='#4f46e5' />
                    <Text className='font-semibold text-base'>
                        Security
                    </Text>
                </View>
                <ChevronRightIcon size={22} color='#9ca3af' />
            </TouchableOpacity>
            <TouchableOpacity className='p-5 flex-row items-center justify-between bg-white mb-3 rounded-lg'>
                <View className='flex-row items-center space-x-3'>
                    <GlobeAltIcon size={28} color='#4f46e5' />
                    <Text className='font-semibold text-base'>
                        Language
                    </Text>
                </View>
                <ChevronRightIcon size={22} color='#9ca3af' />
            </TouchableOpacity>
            <TouchableOpacity className='p-5 flex-row items-center justify-between bg-white mb-3 rounded-lg'>
                <View className='flex-row items-center space-x-3'>
                    <LifebuoyIcon size={28} color='#4f46e5' />
                    <Text className='font-semibold text-base'>
                        Privacy & Policy
                    </Text>
                </View>
                <ChevronRightIcon size={22} color='#9ca3af' />
            </TouchableOpacity>
            <TouchableOpacity className='p-5 flex-row items-center justify-between bg-white mb-3 rounded-lg'>
                <View className='flex-row items-center space-x-3'>
                    <BookmarkIcon size={28} color='#4f46e5' />
                    <Text className='font-semibold text-base'>
                        Terms & Condition
                    </Text>
                </View>
                <ChevronRightIcon size={22} color='#9ca3af' />
            </TouchableOpacity>
            <TouchableOpacity className='p-5 flex-row items-center justify-between bg-white mb-3 rounded-lg'>
                <View className='flex-row items-center space-x-3'>
                    <EnvelopeIcon size={28} color='#4f46e5' />
                    <Text className='font-semibold text-base'>
                        Contact Us
                    </Text>
                </View>
                <ChevronRightIcon size={22} color='#9ca3af' />
            </TouchableOpacity>
        </View>
    )
}

export default SettingsScreen