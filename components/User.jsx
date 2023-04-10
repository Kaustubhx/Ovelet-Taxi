import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
    Image,
    StatusBar,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { ArrowLeftIcon, PencilSquareIcon } from "react-native-heroicons/outline";
import uuid from "uuid";
import { useNavigation } from "@react-navigation/core";
import { app, auth } from "../firebase";
import { updatePassword, updatePhoneNumber, updateProfile } from "firebase/auth";

export default User = () => {

    const navigation = useNavigation();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phNumber, setPhNumber] = useState();
    const [image, setImage] = useState(null);
    const defaultProfile = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
    const [uploding, setUploading] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <ArrowLeftIcon size={32} color='white' style={{ marginLeft: 20 }} onPress={() => navigation.navigate('HomeScreen', { screen: 'Settings' })} />
            ),
        });

        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Please allow the Media permissions form setting')
                }
            }
        })
    })


    const pickImage = async () => {
        const imageResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        console.log({ imageResult });

        handleImageResult(imageResult.assets[0].uri);
    }

    const handleImageResult = async (imageResult) => {
        try {
            setUploading(true);

            if (!imageResult.canceled) {
                const uploadUrl = await uploadImageAsync(imageResult);
                setImage(uploadUrl);
            }
        } catch (e) {
            console.log(e);
            alert("Upload failed, sorry :(");
        } finally {
            setUploading(false);
        }
    }

    async function uploadImageAsync(uri) {
        // Why are we using XMLHttpRequest? See:
        // https://github.com/expo/expo/issues/2402#issuecomment-443726662
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", uri, true);
            xhr.send(null);
        });

        const fileRef = ref(getStorage(app), uuid.v4());
        const result = await uploadBytes(fileRef, blob);

        // We're done with the blob, close and release it
        blob.close();

        return await getDownloadURL(fileRef);
    }

    const saveProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
    }


    return (
        <View className='m-5'>
            <View className='items-center relative'>
                <View className='relative items-center'>
                    <Image source={auth.currentUser?.photoURL ? { uri: auth.currentUser?.photoURL } : { uri: defaultProfile }}
                        alt='Avatar'
                        className='h-32 w-32 rounded-full'
                        style={{
                            borderWidth: 3,
                            borderColor: '#6366f1'
                        }}

                    />
                    <TouchableOpacity
                        className='absolute bottom-3 -right-2 bg-indigo-50 h-10 w-10 items-center justify-center rounded-full'
                        onPress={pickImage}
                    >
                        <PencilSquareIcon size={32} color='#4f46e5' />
                    </TouchableOpacity>
                </View>

                <Text className='mt-5 font-bold text-xl text-gray-700'>{auth.currentUser?.displayName}</Text>
            </View>

            <View className='mt-8 space-y-5'>
                <View className='space-y-2'>
                    <Text className='text-base tracking-wider uppercase font-semibold text-indigo-600'>
                        Name
                    </Text>
                    <TextInput
                        className='bg-gray-100 py-2 px-4 border border-indigo-500'
                        placeholder='Change User Name'
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
                        className='bg-gray-100 py-2 px-4 border border-indigo-500'
                        placeholder='Change Email'
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
                        Phone Number
                    </Text>
                    <TextInput
                        className='bg-gray-100 py-2 px-4 border border-indigo-500'
                        placeholder='Change Password'
                        value={phNumber}
                        onChangeText={text => setPhNumber(text)}
                        placeholderTextColor='#444'
                        autoCapitalize='none'
                        keyboardType='default'
                        autoFocus={true}
                    />
                </View>
            </View>
            <TouchableOpacity className='mt-8' onPress={saveProfile}>
                <LinearGradient start={{ x: -1, y: 0 }} end={{ x: 1, y: 0 / 5 }} className='py-3 px-7 rounded-full' colors={['#3b82f6', '#4f46e5']}>
                    <Text
                        className='text-white text-center text-base tracking-widest font-semibold uppercase'
                    >
                        Save Changes
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}