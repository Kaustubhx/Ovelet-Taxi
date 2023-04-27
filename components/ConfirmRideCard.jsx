import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import { Image } from 'react-native'
import { StarIcon } from 'react-native-heroicons/outline'
import { TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import { selectBookedCab, selectTravelCharge, selectTravelTimeInformation, setBookedTaxi } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/core'

const ConfirmRideCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const rating = [1, 2, 3, 4];
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    const travelCharge = useSelector(selectTravelCharge);
    const bookedTaxi = useSelector(selectBookedCab);

    useEffect(() => {
        if (bookedTaxi.cabOptions) {
            navigation.navigate('CabOptionsCard')
        }
    }, [])

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

            <TouchableOpacity
                className='my-5 mb-8'
                onPress={() => dispatch(
                    setBookedTaxi({
                        booked: true
                    })
                )}
            >
                <LinearGradient start={{ x: -1, y: 0 }} end={{ x: 1, y: 0 / 5 }} className='py-3 px-7 rounded-full' colors={['#3b82f6', '#4f46e5']}>
                    <Text
                        className='text-white text-center text-base tracking-[4px] font-semibold uppercase'
                    >
                        Continue
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default ConfirmRideCard