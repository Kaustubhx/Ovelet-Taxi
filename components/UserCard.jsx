import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ChevronRightIcon } from 'react-native-heroicons/outline'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'

const UserCard = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>
                This is a text
            </Text>
        </View>
    )
}

export default UserCard