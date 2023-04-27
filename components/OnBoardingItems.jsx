import { View, Text } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import { Image } from 'react-native';

const OnBoardingItems = ({ item }) => {
    const { width } = useWindowDimensions();

    return (
        <View className='flex-1 items-center justify-center' style={{ width }}>
            <Image source={item.image} className='h-80 w-80' style={{ resizeMode: 'contain' }} />

            <View className=''>
                <Text className='text-2xl font-bold text-white text-center'>{item.title}</Text>
                <Text className='font-base text-sm text-center text-gray-300 px-16'>{item.description}</Text>
            </View>
        </View >
    )
}

export default OnBoardingItems