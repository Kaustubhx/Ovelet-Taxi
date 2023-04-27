import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { selectBookedCab, selectTravelCharge, selectTravelTimeInformation } from '../slices/navSlice'
import { ChatBubbleLeftIcon, PhoneIcon, StarIcon } from 'react-native-heroicons/solid'
import { LinearGradient } from 'expo-linear-gradient'

const CabOptionsCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const rating = [1, 2, 3, 4];
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    const travelCharge = useSelector(selectTravelCharge);
    const bookedTaxi = useSelector(selectBookedCab);

    return (
        <ScrollView
            className='bg-white flex-1 py-5'
            showsVerticalScrollIndicator={false}
        >
            <View className='flex-row items-center space-x-4'>
                <Image source={require('../assets/user-1.jpg')} className='h-20 w-20 rounded-lg' />

                <View className=''>
                    <Text className='text-xl font-semibold text-gray-800'>Antonio Raymond</Text>
                    <View className='flex-row'>
                        {rating.map((stars, i) => (
                            <StarIcon key={i} size={28} color='yellow' fill='yellow' />
                        ))}
                    </View>
                </View>
            </View>

            <View className='my-6'>
                <Text className='text-center text-gray-500 tracking-wider text-base font-medium'>Toyota Avanza B 3323 SS</Text>
            </View>

            <View className='flex-row w-full justify-between px-5'>
                <View className='items-center'>
                    <Text className='uppercase text-gray-400'>Distance</Text>
                    <Text className='tracking-wider font-semibold text-gray-700'>{travelTimeInformation?.distance.text}</Text>
                </View>
                <View className='items-center'>
                    <Text className='uppercase text-gray-400'>Time</Text>
                    <Text className='tracking-wider font-semibold text-gray-700'>{travelTimeInformation?.duration.text}</Text>
                </View>
                <View className='items-center'>
                    <Text className='uppercase text-gray-400'>Price</Text>
                    <Text className='tracking-wider font-semibold text-gray-700'>
                        {travelCharge.travelCharge}
                    </Text>
                </View>
            </View>

            <View className='flex-row my-5 justify-evenly items-center w-full'>
                <TouchableOpacity className='items-center justify-center'>
                    <LinearGradient start={{ x: -1, y: 0 }} end={{ x: 1, y: 0 / 5 }} className='rounded-full flex-row px-5 py-3 space-x-2' colors={['#10b981', '#22c55e']}>
                        <PhoneIcon size={28} color='white' />
                        <Text className='text-center uppercase text-lg tracking-[3px] text-white font-medium'>
                            Call
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity className='text-center flex-row'>
                    <LinearGradient start={{ x: -1, y: 0 }} end={{ x: 1, y: 0 / 5 }} className='px-5 py-3 rounded-full flex-row space-x-2' colors={['#3b82f6', '#4f46e5']}>
                        <ChatBubbleLeftIcon size={28} color='white' />
                        <Text className='text-center uppercase text-lg tracking-[3px] text-white font-medium'>
                            Chat
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default CabOptionsCard