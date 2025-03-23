import "@/global.css"
import { router } from "expo-router";

import { View, Image, Text, TouchableWithoutFeedback} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Intro(){
    return (
        <SafeAreaView className="w-screen h-screen bg-primary p-5">
            <TouchableWithoutFeedback onPress={() => router.push('/(tabs)')}>
                <View className="flex-1 gap-14 px-4 mt-[15rem]">
                    <View className="flex-row items-center justify-center">
                        <Text className="text-white-primary text-[30px] font-bold">VIT</Text>
                        <Image
                            source={require("@/assets/images/LogoVitality.png")}
                            className="w-10 h-10"
                        />
                        <Text className="text-white-primary text-[30px] font-bold">LITY</Text>
                    </View>
                    <Text className="text-white-secondary/80 text-[26px] text-center font-light leading-snug">
                        Breathe in. Breathe out. 
                        You've arrived at your sanctuary.
                    </Text>
                    <View className="flex-1 justify-center items-center">
                        <Text className="text-white-primary/30 text-[16px]">Tap anywhere.</Text>
                    </View>
                </View>     
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}