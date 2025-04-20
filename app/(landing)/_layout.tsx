import { Stack } from "expo-router";

export default function LandingLayout (){
    return (
        <Stack initialRouteName="index">
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="intro" options={{headerShown: false}}/>
        </Stack>
    )
}