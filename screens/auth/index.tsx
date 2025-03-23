import '@/global.css'
import { router } from 'expo-router'
import React from 'react'
import { View, Image, Text, TextInput, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default () => {
    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    const handleLogin = () => {
        if(password === '123' && username === 'admin') {
            router.push('/intro')
        } else {
            alert('Incorrect username or password!')
        }
    }

    return (
        <SafeAreaView className="w-screen h-screen bg-primary p-5">
            <Text className='text-white-primary'>VITALITY</Text>
            <View className='flex-col items-center gap-5 pt-28'>
                <Image
                    source={require("@/assets/images/LogoVitality.png")}
                    className="w-30 h-30"
                />
                <Text className='text-white-primary text-[30px]'>SIGN IN</Text>
            </View>
            <View className='flex-1 mt-14 gap-5 px-2'>
                <View className='flex gap-3'>
                    <Text className='text-white-primary text-[16px]'>Username</Text>
                    <TextInput 
                        className='bg-white-primary rounded-full px-7 py-5 text-[16px]' 
                        placeholder='Enter your username'
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                </View>
                <View className='flex gap-3'>
                    <Text className='text-white-primary text-[16px]'>Password</Text>
                    <TextInput 
                        secureTextEntry={true}
                        className='bg-white-primary rounded-full px-7 py-5 text-[16px]' 
                        placeholder='Enter your password'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <Text className='text-center text-white-primary text-[15px] mt-3'>Forgot Password?</Text>
                <TouchableWithoutFeedback onPress={handleLogin}>
                    <View className='flex justify-center bg-purple-light h-[63px] rounded-full mt-8'>
                        <Text className='text-white-primary text-center text-[18px]'>Login</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    )
}