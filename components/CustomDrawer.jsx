import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { HomeIcon, PowerIcon } from 'react-native-heroicons/outline'
import { auth, getUser } from '../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../slices/userSlice'

const CustomDrawer = (props) => {
    const navigation = useNavigation();
    const defaultProfile = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'

    return (
        <View className='flex-1 h-full'>
            <LinearGradient className='flex-1 h-full' colors={['#3b82f6', '#4f46e5']}>
                <DrawerContentScrollView
                    {...props}
                >
                    <View className='my-20 w-full px-3 flex-1 h-full justify-center'>
                        <View className='items-center'>
                            <Image
                                source={auth.currentUser?.photoURL ? { uri: auth.currentUser?.photoURL } : { uri: defaultProfile }}
                                className='h-20 w-20 rounded-lg'
                            />
                            <Text className='text-white capitalize text-lg font-semibold mt-3'>{auth.currentUser?.displayName}</Text>
                        </View>
                        <View className='mt-8'>
                            <DrawerItemList {...props} />
                            <DrawerItem
                                label='Sign Out'
                                icon={() => (
                                    <PowerIcon size={28} color='white' />
                                )}
                                labelStyle={{ color: 'white' }}
                                onPress={() => auth.signOut()}
                            />
                        </View>
                    </View>
                </DrawerContentScrollView>
            </LinearGradient>
        </View>
    )
}

export default CustomDrawer