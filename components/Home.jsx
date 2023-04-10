import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { useEffect } from 'react';
import { Bars3Icon, BellIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon, MapPinIcon } from 'react-native-heroicons/outline';
import { REACT_APP_GOOGLE_MAPS_API_KEY } from "@env";
import { useSelector } from 'react-redux';
import { selectUser } from '../slices/userSlice';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons/faCar'
import { TextInput } from 'react-native';
import Map from './Map';

const Home = () => {
    const user = useSelector(selectUser)
    const navigation = useNavigation();
    console.log(user)

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Bars3Icon size={32} color='white' style={{ marginLeft: 20 }} onPress={() => navigation.openDrawer()} />
            ),
            headerRight: () => (
                <BellIcon size={32} color='white' style={{ marginRight: 20 }} onPress={() => navigation.navigate('Notification')} />
            )
        })
    }, [])

    return (
        <View className='relative w-full'>
            <View className='flex-row items-center space-x-2 pb-2 m-5 absolute'>
                <View className='flex-row space-x-2 flex-1 items-center bg-white rounded-lg px-3'>
                    <FontAwesomeIcon size={24} icon={faCar} color='#6366f1' />
                    <GooglePlacesAutocomplete
                        className='placeholder:font-semibold placeholder:text-sm'
                        placeholder='Where are you going?'
                        onPress={(data, details = null) => {
                            dispatch(
                                setOrgin({
                                    location: details.geometry.location,
                                    description: data.description,

                                }))

                            dispatch(setDestination(null))
                        }}
                        fetchDetails={true}
                        query={{
                            key: REACT_APP_GOOGLE_MAPS_API_KEY,
                            language: "en",
                        }}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                        enablePoweredByContainer={false}
                        styles={{
                            textInput: {
                                fontSize: 18,
                            }
                        }}
                    />
                    <MapPinIcon size={28} color='#6366f1' />
                </View>
            </View>

            <View className="flex-1">
                <Map />
            </View>
        </View>
    )
}

export default Home