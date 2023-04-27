import { View, Text, useWindowDimensions, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import { useEffect } from 'react';
import { Bars3Icon, BellIcon, MapPinIcon, XMarkIcon } from 'react-native-heroicons/outline';
import { REACT_APP_GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch, useSelector } from 'react-redux';
import { selectBookedCab, selectDestination, selectOrigin, setDestination, setOrgin } from '../slices/navSlice';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons/faCar'
import Map from './Map';
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from './RideOptionsCard';
import EnterPromoCard from './EnterPromoCard';
import ConfirmRideCard from './ConfirmRideCard';
import BookedTaxiModal from './BookedTaxiModal';
import CabOptionsCard from './CabOptionsCard';
import RideFeedbackModal from './RideFeedbackModal';

const Home = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const bookedTaxi = useSelector(selectBookedCab);
    const [openFeedback, setFeedback] = useState();

    const { height, width } = useWindowDimensions();


    const Stack = createStackNavigator();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Bars3Icon size={32} color='white' style={{ marginLeft: 20 }} onPress={() => navigation.openDrawer()} />
            ),
            headerRight: () => (
                <BellIcon size={32} color='white' style={{ marginRight: 20 }} onPress={() => navigation.navigate('Notification')} />
            )
        });

        setTimeout(() => {
            setFeedback(true)
        }, 5000)

    }, [bookedTaxi.booked]);

    return (
        <View className='relative flex-1'>
            <View className='flex-row items-center m-5 absolute z-10 bg-white rounded-lg px-3 shadow-lg'>
                <FontAwesomeIcon className='' size={24} icon={faCar} color='#4338ca' />
                <View className='flex-1'>
                    <GooglePlacesAutocomplete
                        className='placeholder:font-semibold placeholder:text-sm'
                        placeholder='Where are you going?'
                        fetchDetails={true}
                        returnKeyType={"search"}
                        minLength={2}
                        enablePoweredByContainer={false}
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description,
                                }))
                        }}
                        query={{
                            key: REACT_APP_GOOGLE_MAPS_API_KEY,
                            language: "en",
                        }}
                        debounce={400}
                    />
                </View>
                <MapPinIcon size={28} color='#4338ca' />
            </View>

            <View className="flex-1">
                <Map />
            </View>

            {bookedTaxi.booked && (
                <View className='flex-1 absolute w-full z-20' style={{ height }}>
                    <BookedTaxiModal />
                </View>
            )}

            {origin && destination && (
                <View className='absolute bottom-5 flex-1 w-full px-5'>
                    <View className='bg-white flex-1 px-4 rounded-lg' style={{ height: height / 2.7 }}>
                        <Stack.Navigator>
                            <Stack.Screen
                                name='NavigateCard'
                                component={NavigateCard}
                                options={{
                                    headerShown: false,
                                }}
                            />
                            <Stack.Screen
                                name='EnterPromoCard'
                                component={EnterPromoCard}
                                options={{
                                    headerShown: false,
                                }}
                            />
                            <Stack.Screen
                                name='ConfirmRideCard'
                                component={ConfirmRideCard}
                                options={{
                                    headerShown: false,
                                }}
                            />
                            <Stack.Screen
                                name='CabOptionsCard'
                                component={CabOptionsCard}
                                options={{
                                    headerShown: false,
                                }}
                            />
                        </Stack.Navigator>
                    </View>
                </View>
            )}
        </View>
    )
}

export default Home