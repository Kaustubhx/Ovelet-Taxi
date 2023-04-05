import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/core'
import UserForm from '../components/UserForm'
import { useSelector } from 'react-redux'
import { selectUser } from '../slices/userSlice'

const LoginScreen = () => {
    const user = useSelector(selectUser);
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    if (user) {
        navigation.navigate('HomeScreen');
    }

    return (
        <View className='flex-1 relative'>
            <LinearGradient className='h-2/5 pt-10' colors={['#3b82f6', '#4f46e5']}>
                <View className='mt-5 ml-5'>
                    <ArrowLeftIcon size={32} color='white' onPress={() => navigation.goBack()} />
                </View>
            </LinearGradient>

            <View className='flex-1 w-full h-screen absolute top-28 z-20 shadow-lg'>
                <UserForm />
            </View>
            <View className='h-1/2 flex-1' />
        </View>
    )
}

export default LoginScreen