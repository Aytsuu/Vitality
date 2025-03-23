import { SafeAreaView } from "react-native-safe-area-context";
import { Image, View, Text } from "react-native"
import { Heart, Headphones } from "lucide-react-native";

export default function Meditate() {
    return (
        <SafeAreaView className="relative w-screen h-screen bg-primary p-5">
            <View className='flex-row'>
                <Text className='text-white-primary tracking-[3px]'>VIT</Text>
                <Image 
                    source={require("@/assets/images/LogoVitality.png")}
                    className='w-[1.5rem] h-[1.5rem]'
                />
                <Text className='text-white-primary tracking-[3px]'>LITY</Text>
            </View>
            <View className='flex items-center gap-4 mt-[2rem]'>
                <Text className="text-[30px] text-white-primary font-semibold tracking-[1px]">Focus</Text>
                <Text className="text-white-tertiary">Begin your journey to mindfulness.</Text>
                <Image
                    source={require("@/assets/images/focus.png")}
                    className="w-30 h-30"
                />
                <View className="grid gap-2 mt-3 p-1">
                    <Text className="text-white-secondary text-[15px]">Course</Text>
                    <Text className="text-white-tertiary/80 text-[17px] tracking-[1px] leading-snug">
                        In this moment, let the world fade away 
                        as you tune into the rhythm of your breath.
                    </Text>
                </View>
                <View className="w-full flex-row justify-between gap-2 mt-3 p-1">
                    <View className="flex-row items-center gap-2">
                        <Heart color={"white"} size={16}/>
                        <Text className="text-white-secondary text-[15px]">24,234  ·  Favorites</Text>
                    </View>
                    <View className="flex-row items-center gap-2">
                        <Headphones color={"white"} size={16}/>
                        <Text className="text-white-secondary text-[15px]"> 34,441  ·  Listening</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}