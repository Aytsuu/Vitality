import '@/global.css'
import { router } from 'expo-router'
import { TouchableWithoutFeedback } from 'react-native'

import { View, Text, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default () => {
    return (
        <SafeAreaView className="w-screen h-screen bg-primary p-5">
            <View className='flex-grow items-center gap-8 pt-24'>
                <Image
                    source={require("@/assets/images/LogoVitality.png")}
                    className="w-30 h-30"
                />
                <Text className='text-white-primary text-[30px]'>Welcome to Vitality</Text>
                <Text className='text-white-secondary text-center text-[18px] leading-relaxed'>
                    The harmony of soothing sounds, stories and 
                    captivating  visuals will guide you to a place of calm, 
                    clarity, and connection.
                </Text>
            </View>
            <View className='flex items-center justify-end gap-4 mb-16'>
                <Text className='text-white-primary'>Tap into serenity.</Text>
                <TouchableWithoutFeedback onPress={() => router.push('/(auth)')}>
                    <View className='flex justify-center bg-purple-light w-[320px] h-[63px] rounded-full'>
                        <Text className='text-white-primary text-center text-[18px]'>Get Started</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    )
}