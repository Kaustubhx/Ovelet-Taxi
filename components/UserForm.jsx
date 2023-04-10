import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from '../slices/userSlice'

const UserForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                console.log(userAuth)
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email,
                }))
            } else {
                dispatch(logout())
            }
        });
        return unsubscribe;
    }, [])

    const [register, setRegister] = useState('true');

    const goToRegister = () => {
        setRegister(!register);
    }

    const handleSignUp = () => {
        createUserWithEmailAndPassword(
            auth,
            email,
            password,
        ).then((authUser) => {
            console.log(authUser)
            updateProfile(auth.currentUser, {
                displayName: name
            })
            dispatch(login({
                userName: name
            }))
        }).catch(error => {
            alert(error.message);
            console.log(error.message);
        })

    }

    const handleLogin = () => {

        signInWithEmailAndPassword(
            auth,
            email,
            password
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            console.log(error.message);
        })
    }

    return (
        <>
            {register && (
                <View className='p-5 bg-white rounded-t-2xl h-full mx-5'>
                    <Text className='text-2xl text-indigo-600 font-bold mt-8'>Sign In</Text>
                    <Text className='text-stone-400 font-medium text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, molestiae.</Text>

                    <>
                        <View className='mt-8 space-y-5'>
                            <View className='space-y-2'>
                                <Text className='text-base tracking-wider uppercase font-semibold text-indigo-600'>
                                    Email
                                </Text>
                                <TextInput
                                    className='bg-gray-100 py-2 px-4'
                                    placeholder='Enter phone number or email'
                                    value={email}
                                    onChangeText={text => setEmail(text)}
                                    placeholderTextColor='#444'
                                    autoCapitalize='none'
                                    keyboardType='default'
                                    autoFocus={true}
                                />
                            </View>

                            <View className='space-y-2'>
                                <Text className='text-base tracking-wider uppercase font-semibold text-indigo-600'>
                                    Password
                                </Text>
                                <TextInput
                                    className='bg-gray-100 py-2 px-4'
                                    placeholder='Enter phone number or email'
                                    value={password}
                                    onChangeText={text => setPassword(text)}
                                    placeholderTextColor='#444'
                                    autoCapitalize='none'
                                    keyboardType='default'
                                    autoFocus={true}
                                />
                            </View>
                        </View>
                        <View className='ml-auto mt-5'>
                            <Text className='text-indigo-600 font-medium capitalize text-base'>
                                Forgot Password?
                            </Text>
                        </View>
                    </>


                    <TouchableOpacity className='mt-8'>
                        <LinearGradient start={{ x: -1, y: 0 }} end={{ x: 1, y: 0 / 5 }} className='py-3 px-7 rounded-full' colors={['#3b82f6', '#4f46e5']}>
                            <Text
                                className='text-white text-center text-base tracking-widest font-semibold uppercase'
                                onPress={handleLogin}
                            >
                                Sign In
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <View className='flex-1 mt-8'>
                        <Text className='text-center text-base font-medium text-gray-500'>Dont Have an account?{" "}
                            <Text className='text-indigo-600' onPress={goToRegister}>Sign up</Text>
                        </Text>
                    </View>
                </View>
            )}

            {/* Sign up */}
            <View className='p-5 bg-white rounded-t-2xl h-full mx-5'>
                <Text className='text-2xl text-indigo-600 font-bold mt-8'>Sign Up</Text>
                <Text className='text-stone-400 font-medium text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, molestiae.</Text>

                <View>
                    <View className='mt-8 space-y-5'>
                        <View className='space-y-2'>
                            <Text className='text-base tracking-wider uppercase font-semibold text-indigo-600'>
                                Name
                            </Text>
                            <TextInput
                                className='bg-gray-100 py-2 px-4'
                                placeholder='Enter User Name'
                                value={name}
                                onChangeText={text => setName(text)}
                                placeholderTextColor='#444'
                                autoCapitalize='none'
                                keyboardType='default'
                                autoFocus={true}
                            />
                        </View>

                        <View className='space-y-2'>
                            <Text className='text-base tracking-wider uppercase font-semibold text-indigo-600'>
                                Email
                            </Text>
                            <TextInput
                                className='bg-gray-100 py-2 px-4'
                                placeholder='Enter Phone Number or Email'
                                value={email}
                                onChangeText={text => setEmail(text)}
                                placeholderTextColor='#444'
                                autoCapitalize='none'
                                keyboardType='default'
                                autoFocus={true}
                            />
                        </View>

                        <View className='space-y-2'>
                            <Text className='text-base tracking-wider uppercase font-semibold text-indigo-600'>
                                Password
                            </Text>
                            <TextInput
                                className='bg-gray-100 py-2 px-4'
                                placeholder='Enter Password'
                                value={password}
                                onChangeText={text => setPassword(text)}
                                placeholderTextColor='#444'
                                autoCapitalize='none'
                                keyboardType='default'
                                autoFocus={true}
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity className='mt-8' onPress={handleSignUp}>
                    <LinearGradient start={{ x: -1, y: 0 }} end={{ x: 1, y: 0 / 5 }} className='py-3 px-7 rounded-full' colors={['#3b82f6', '#4f46e5']}>
                        <Text
                            className='text-white text-center text-base tracking-widest font-semibold uppercase'>
                            Sign Up
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View className='flex-1 mt-8'>
                    <Text className='text-center text-base font-medium text-gray-500'>Already have an account?{" "}
                        <Text className='text-indigo-600' onPress={goToRegister}>Sign in</Text>
                    </Text>
                </View>
            </View>
        </>
    )
}

export default UserForm