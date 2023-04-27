import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { TicketIcon, UsersIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native';
import { selectTravelTimeInformation, setTravelCharge } from '../slices/navSlice';

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);

    const SURGE_CHARGE_RATE = 1.5;

    const data = [
        {
            id: "Uber-X-123",
            title: "Sedan",
            capacity: '1-4',
            multipler: 1,
            image: "https://links.papareact.com/3pn",
        },
        {
            id: "Uber-XL-456",
            title: "Suv",
            capacity: '2-6',
            multipler: 1.2,
            image: "https://links.papareact.com/5w8",
        },
        {
            id: "Uber-LUX-789",
            title: "Van",
            capacity: '4-6',
            multipler: 1.75,
            image: "https://links.papareact.com/7pf",
        },
    ];

    const travelFee =
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(
            (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * selected?.multipler) / 15
        );

    console.log(travelFee, 'FROM TRAVEL FEE');

    const requestRide = () => {
        navigation.navigate('ConfirmRideCard')
        dispatch(setTravelCharge({
            travelCharge: travelFee
        }))
    }

    return (
        <ScrollView
            className='bg-white flex-1 rounded-lg'
            showsVerticalScrollIndicator={false}
        >
            <Text className="uppercase py-5 text-gray-500">Choose car</Text>
            <View className='w-full justify-between flex-row space-x-2 pb-2'>
                {data.map((rides) => (
                    <TouchableOpacity
                        onPress={() => setSelected(rides)}
                        key={rides.id}
                        className={`bg-gray-200 flex-1 items-center ${rides.id === selected?.id && "bg-indigo-300"}`}
                    >
                        <Image
                            style={{
                                height: 80,
                                width: 80,
                                resizeMode: "contain",
                            }}
                            source={{ uri: rides.image }}
                        />
                        <View className=''>
                            
                            <Text className={`text-center uppercase text-xs font-medium ${rides.id === selected?.id && 'text-indigo-600'}`}>{rides.title}</Text>

                            <View className='flex-row space-x-1 my-1'>
                                <UsersIcon size={16} color='gray' />
                                <Text className={`text-xs text-gray-500 ${rides.id === selected?.id && 'text-indigo-600'}`}>{rides.capacity}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            <View className='bg-white py-2'>
                <View className='flex-row justify-between w-full mb-2'>
                    <Text className='uppercase text-left text-gray-400'>Trip Fee</Text>
                    <Text className='uppercase text-left text-yellow-400'>
                        {new Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                        }).format(
                            (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * selected?.multipler) / 15
                        )}
                    </Text>
                </View>

                <TouchableOpacity
                    className='flex-row items-center bg-gray-200 px-3'
                    onPress={() => navigation.navigate('EnterPromoCard')}
                >
                    <TicketIcon size={28} color='gray' />
                    <Text
                        className='bg-gray-200 px-2 py-1 text-indigo-900/60 uppercase font-medium tracking-wider'
                    >
                        Input promo code
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity className='mt-5 mb-3'>
                    <LinearGradient start={{ x: -1, y: 0 }} end={{ x: 1, y: 0 / 5 }} className='py-3 px-7 rounded-full' colors={['#3b82f6', '#4f46e5']}>
                        <Text
                            className='text-white text-center text-base tracking-[4px] font-semibold uppercase'
                            onPress={requestRide}
                        >
                            Request
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )


}

export default RideOptionsCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})