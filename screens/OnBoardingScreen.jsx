import { View, Text, TouchableOpacity, FlatList, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { LinearGradient } from 'expo-linear-gradient';
import slides from '../data/slides';
import OnBoardingItems from '../components/OnBoardingItems';
import { useWindowDimensions } from 'react-native';
import { ArrowRightIcon, ArrowRightOnRectangleIcon, MapPinIcon } from 'react-native-heroicons/outline';

const OnBoardingScreen = () => {
    const navigation = useNavigation();
    const { height, width } = useWindowDimensions();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef(null);

    const updateSlideIndex = (e) => {
        const xOffSet = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(xOffSet / width)
        setCurrentSlideIndex(currentIndex);
    }

    const goToNextSlide = () => {
        if (currentSlideIndex === slides.length - 1) {
            return;
        }

        setCurrentSlideIndex(currentSlideIndex + 1)
    };

    const goToPrevSlide = () => {
        if (currentSlideIndex === 0) {
            return;
        }

        setCurrentSlideIndex(currentSlideIndex - 1)
    };

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

        ref.current?.scrollToIndex({
            index: currentSlideIndex,
            animated: true,
        })
    }, [currentSlideIndex]);

    return (
        <LinearGradient className='flex-1 justify-center items-center' colors={['#3b82f6', '#4f46e5']}>
            <FlatList
                data={slides}
                ref={ref}
                initialScrollIndex={currentSlideIndex}
                onMomentumScrollEnd={updateSlideIndex}
                renderItem={({ item }) => <OnBoardingItems item={item} />}
                contentContainerStyle={{ height: height * 0.85 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
            />

            <View className='justify-between px-5' style={{ height: height * 0.25 }}>
                {currentSlideIndex == slides.length - 1 ?
                    (
                        <View className='items-center space-y-5'>
                            <TouchableOpacity
                                className='flex-row items-center bg-white rounded-full p-3'
                                onPress={() => navigation.navigate('LoginScreen')}
                            >
                                <ArrowRightOnRectangleIcon size={32} color='gray' />
                                <Text className='text-lg font-medium text-gray-700 ml-4'>
                                    Login Or Register
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={goToPrevSlide}>
                                <Text className='underline text-white'>Go Back</Text>
                            </TouchableOpacity>
                        </View>
                    )
                    :
                    (
                        <View className='w-full flex-row items-center mt-5 h-0.5'>
                            {slides.map((_, index) => (
                                <View key={index} className={`h-0.5 w-3 mx-1 rounded-sm ${currentSlideIndex == index ? 'bg-white w-6' : 'bg-stone-400'}`} />
                            ))}

                            <TouchableOpacity
                                className={`ml-auto bg-white p-5 rounded-full`}
                                onPress={goToNextSlide}
                            >
                                <ArrowRightIcon size={32} color='#334155' />
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        </LinearGradient>
    )
}

export default OnBoardingScreen