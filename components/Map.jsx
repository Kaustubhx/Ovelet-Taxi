import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setDestination, setOrgin } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { REACT_APP_GOOGLE_MAPS_API_KEY } from "@env";
import { useWindowDimensions } from 'react-native';
import { setTravelTimeInformation } from '../slices/navSlice';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

export default function App() {
    const dispatch = useDispatch();

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef();
    const { height, width } = useWindowDimensions();

    useEffect(() => {
        if (!origin || !destination) return;

        zoomOut = setTimeout(() => {
            mapRef.current?.fitToSuppliedMarkers(["origin", "destination"], {
                edgePadding: {
                    top: 50,
                    right: 50,
                    bottom: height / 2,
                    left: 50,
                },
                animated: true
            });
        }, 500)
    }, [origin, destination]);

    useEffect(() => {
        if (!origin || !destination) return;

        const getTravelTime = async () => {
            fetch(
                `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.description}&destinations=${destination.description}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`
            ).then((res) => res.json())
                .then(data => {
                    dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
                })
        };

        getTravelTime();
    }, [origin, destination, REACT_APP_GOOGLE_MAPS_API_KEY])

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                    latitude: origin?.latitude,
                    longitude: origin?.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                {origin && destination && (
                    <MapViewDirections
                        origin={{ latitude: origin.latitude, longitude: origin.longitude }}
                        destination={{ latitude: destination.location.lat, longitude: destination.location.lng }}
                        apikey={REACT_APP_GOOGLE_MAPS_API_KEY}
                        strokeWidth={4}
                        strokeColor="#4f46e5"
                    />
                )}
                <Marker
                    style={{
                        height: 45,
                        width: 45,
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    }}
                    coordinate={{
                        latitude: origin?.latitude,
                        longitude: origin?.longitude,
                    }}
                    title='Origin'
                    description='Your Location'
                    identifier={"origin"}
                >
                    <View className='items-center justify-center bg-indigo-300/50 p-1.5 rounded-full relative top-1'>
                        <View className='items-center justify-center bg-indigo-600/80 p-0.5 rounded-full'>
                            <FontAwesomeIcon size={18} color='white' icon={faLocationArrow} />
                        </View>
                    </View>
                </Marker>

                {destination?.location && (
                    <Marker
                        style={{
                            height: 45,
                            width: 45,
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}
                        coordinate={{
                            latitude: destination.location.lat,
                            longitude: destination.location.lng,
                        }}
                        title='Destination'
                        description={destination.description}
                        identifier={"destination"}
                    >
                        <View className='items-center justify-center bg-orange-300/50 p-1.5 rounded-full relative top-1'>
                            <View className='items-center justify-center bg-orange-600/80 p-2 rounded-full' />
                        </View>
                    </Marker>
                )}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});