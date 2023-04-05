import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { LinearGradient } from 'expo-linear-gradient';

const OnBoardingScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <View className='flex-1 justify-center items-center'>
            <LinearGradient className='flex-1 justify-center items-center w-full px-8' colors={['#3b82f6', '#4f46e5']}>
                <Text className='text-white font-semibold text-2xl mb-4'>
                    Select Location
                </Text>
                <Text className='text-stone-400 text-center mb-5 text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vitae aperiam asperiores totam non in expedita hic sint.
                </Text>
                <TouchableOpacity className='bg-cyan-500 px-6 py-2 rounded-full w-full items-center' onPress={() => navigation.navigate('LoginScreen')}>
                    <Text className='text-white text-xl tracking-widest uppercase font-semibold'>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

export default OnBoardingScreen