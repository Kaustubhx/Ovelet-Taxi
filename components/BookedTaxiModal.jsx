import { View, Text, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { CheckIcon } from 'react-native-heroicons/outline';
import { useDispatch } from 'react-redux';
import { setBookedTaxi } from '../slices/navSlice';
import { Modal } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const BookedTaxiModal = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const getCabOptions = () => {
        dispatch(setBookedTaxi({
            booked: false,
            cabOptions: true, 
        }));

        navigation.navigate('CabOptionsCard')
    }

    return (
        <View className='flex-1 bg-indigo-900/50 w-full items-center justify-center px-5'>
            <View className='bg-white h-1/2 items-center justify-between p-7 w-full rounded-3xl'>
                <Text className='text-xl font-semibold'>Booking Successful</Text>

                <LinearGradient
                    className='p-5 rounded-full'
                    start={{ x: -1, y: 0 }}
                    end={{ x: 1, y: 0 / 5 }}
                    colors={['#3b82f6', '#4f46e5']}
                >
                    <CheckIcon size={42} color='white' />
                </LinearGradient>

                <Text className='text-center text-gray-500'>
                    Your booking has been confirmed, driver will be coming in 3 minutes.
                </Text>

                <TouchableOpacity
                    className='w-full'
                    onPress={getCabOptions}
                >
                    <LinearGradient start={{ x: -1, y: 0 }} end={{ x: 1, y: 0 / 5 }} className='px-7 py-3 rounded-full' colors={['#3b82f6', '#4f46e5']}>
                        <Text className='text-center text-white text-xl tracking-[3px] uppercase font-medium'>Done</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default BookedTaxiModal