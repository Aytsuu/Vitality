import '@/global.css'

import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
    return (
        <SafeAreaView className="relative w-screen h-screen bg-primary p-5">
            <Image 
                source={require("@/assets/images/tree.png")}
                className='absolute z-50 right-0'
            />
            <View className='flex-row'>
                <Text className='text-white-primary tracking-[3px]'>VIT</Text>
                <Image 
                    source={require("@/assets/images/LogoVitality.png")}
                    className='w-[1.5rem] h-[1.5rem]'
                />
                <Text className='text-white-primary tracking-[3px]'>LITY</Text>
            </View>
            <View className='grid items-center gap-8 mt-[7rem]'>
                <Image
                    source={require("@/assets/images/oceanmoon.png")}
                    className="w-35 h-30"
                />
                <Image
                    source={require("@/assets/images/moonwoven.png")}
                    className="w-35 h-30"
                />
                <Image
                    source={require("@/assets/images/avatar.png")}
                    className="w-35 h-30"
                />
            </View>
        </SafeAreaView>
    );
}