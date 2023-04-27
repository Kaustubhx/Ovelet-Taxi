import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon, XMarkIcon } from 'react-native-heroicons/outline';
import { TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

const RideFeedbackModal = () => {

    const rating = [1, 2, 3, 4];
    const [feedback, getFeedback] = useState();

    return (
        <View className={`flex-1 bg-indigo-900/50 w-full items-center justify-center px-5`}>
            <View className='bg-white h-3/4 items-center justify-between p-7 w-full rounded-3xl'>
                <View className='items-center relative w-full'>
                    <Image source={require('../assets/user-1.jpg')} className='h-20 w-20 mb-5 rounded-lg' />
                    <Text className='text-xl font-semibold text-gray-500'>Antonia Raymond</Text>

                    <TouchableOpacity
                        className=' bg-black p-1 rounded-full top-0 right-0 absolute'
                    >
                        <XMarkIcon size={28} color='white' />
                    </TouchableOpacity>
                </View>

                <View className='items-center space-y-3'>
                    <Text className='text-2xl font-semibold text-gray-500'>How was your Trip ?</Text>
                    <Text className='text-base text-center text-gray-400'>Give a rating to enhance the driver experience</Text>
                    <View className='flex-row'>
                        {rating.map((stars, i) => (
                            <TouchableOpacity>
                                <StarIcon key={i} size={28} color='yellow' fill='yellow' />
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity>
                            <StarIcon size={28} color='gray' fill='gray' />
                        </TouchableOpacity>
                    </View>
                </View>

                <View className='border border-gray-300 w-full'>
                    <TextInput
                        className='bg-gray-200 px-3'
                        multiline={true}
                        numberOfLines={4}
                        placeholder='Message'
                    />
                </View>

                <TouchableOpacity
                    className=''>
                    <LinearGradient start={{ x: -1, y: 0 }} end={{ x: 1, y: 0 / 5 }} className='py-3 px-7 rounded-full' colors={['#3b82f6', '#4f46e5']}>
                        <Text
                            className='text-white text-center text-base tracking-[4px] font-semibold uppercase'
                        >
                            Submit Rating
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RideFeedbackModal