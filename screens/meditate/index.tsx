import { SafeAreaView } from "react-native-safe-area-context";
import { Image, View, Text, TextInput, TouchableWithoutFeedback, Alert } from "react-native"
import { Heart, Headphones, SendHorizonal } from "lucide-react-native";
import React from "react";

export default function Meditate() {

    const inputStyle = "border-b-[1px] border-white-primary/20 text-white-tertiary/40 placeholder:text-white-tertiary/40"

    const [name, setName] = React.useState<string>('')
    const [course, setCourse] = React.useState<string>('')
    const [isSent, setIsSent] = React.useState<boolean>(false)

    const handleSend = () => {
        Alert.alert(
            'Confirmation', 
            'Do you want to proceed?', 
            [
                { text: 'Cancel', onPress: () => {}, style: 'cancel' },
                { text: 'OK', onPress: () => setIsSent(true) }
            ]
        );
    }

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
                <Text className="text-white-tertiary/50 text-center mt-1 text-[16px]">
                    {isSent && name && course ? `Your name is ${name}, and You're from ${course}` : ''}
                </Text>
                <View className="grid gap-2 p-1">
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
            <View className="grid mt-5 border-white-primary/40 border-t-2 gap-2">
                <Text className="text-white-tertiary/70 mt-4 text-[15px]">Who are you?</Text>
                <TextInput 
                    placeholder="Name" 
                    className={inputStyle}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput 
                    placeholder="Course" 
                    className={inputStyle}
                    value={course}
                    onChangeText={(text) => setCourse(text)}
                />
                <TouchableWithoutFeedback onPress={handleSend}>
                    <View className="w-full flex-row justify-end items-center mt-4 gap-2">
                        <Text className="text-white-tertiary/70 text-[16px]">Send</Text>
                        <SendHorizonal color={"white"} style={{opacity: 0.7}} size={24}/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    )
}