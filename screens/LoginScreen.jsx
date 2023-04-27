import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/core'
import UserForm from '../components/UserForm'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../slices/userSlice'
import * as Location from 'expo-location';
import { setDestination, setOrgin } from '../slices/navSlice'
import { REACT_APP_GOOGLE_MAPS_API_KEY } from "@env";
import { SafeAreaView } from 'react-native'

const LoginScreen = () => {
    const user = useSelector(selectUser);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [location, setLocation] = useState();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

        const getLocationPermission = async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
        }

        getLocationPermission();

        const getCurrentLocation = async () => {
            const getLocation = await Location.getCurrentPositionAsync({});
            setLocation(getLocation);

            fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${getLocation.coords.latitude},${getLocation.coords.longitude}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`
            ).then((res) => res.json())
                .then(data => {
                    console.log(data.results[0].formatted_address)
                    dispatch(
                        setOrgin({
                            latitude: getLocation.coords.latitude,
                            longitude: getLocation.coords.longitude,
                            description: data.results[0].formatted_address,
                        }))

                    dispatch(setDestination(null))
                })

        }

        getCurrentLocation();
    }, [location]);


    navigation.navigate(user ? 'HomeScreen' : 'LoginScreen')

    return (
        <SafeAreaView className='flex-1 relative'>
            <View className='relative flex-1'>
                <LinearGradient start={{ x: -1, y: 0 }} end={{ x: 1, y: 0 / 5 }} className='h-[45%] absolute w-full' colors={['#3b82f6', '#4f46e5']} />
                <UserForm />
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen