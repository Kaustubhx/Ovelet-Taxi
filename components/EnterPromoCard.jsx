import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/core';
import { TextInput } from 'react-native';
import { TicketIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';

const EnterPromoCard = () => {
    const navigation = useNavigation();
    const [pormoCode, setPromoCode] = useState();

    return (
        <View className='bg-white flex-grow'>
            <Text className='text-left text-base p-5 text-gray-500 uppercase font-medium'>Input Promo code</Text>

            <View className='bg-gray-200 flex-row items-center px-2 rounded-lg'>
                <TicketIcon size={28} color='white' />
                <TextInput
                    className='py-2 px-3'
                    placeholder='Input Promo code'
                />
            </View>

            <TouchableOpacity
                className='mt-8'
                onPress={() => navigation.navigate('ConfirmRideCard')}
            >
                <LinearGradient start={{ x: -1, y: 0 }} end={{ x: 1, y: 0 / 5 }} className='py-3 px-7 rounded-full' colors={['#3b82f6', '#4f46e5']}>
                    <Text
                        className='text-white text-center text-base tracking-[4px] font-semibold uppercase'
                    >
                        Apply
                    </Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
                className='mt-5'
                onPress={() => navigation.goBack()}
            >
                <Text
                    className='text-indigo-500 border border-indigo-600 py-3 px-7 rounded-full text-center text-base tracking-[4px] font-semibold uppercase'
                >
                    Cancle
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default EnterPromoCard