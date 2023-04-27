import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const LoadingOverlay = () => {
    return (
        <View className="flex-1 items-center justify-center bg-black/20">
            <View className='flex-row items-center justify-center space-x-3 bg-white p-3 rounded-lg'>
                <ActivityIndicator
                    color='#4f46e5'
                    size='large'
                />
                <Text className='text-indigo-600 text-lg font-medium'>Fetching Location</Text>
            </View>
        </View>
    )
}

export default LoadingOverlay