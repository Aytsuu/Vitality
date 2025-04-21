import "@/global.css";
import { Equal, X } from "lucide-react-native";
import React from "react";

import { View, Text, Image, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { number } from "yup";

export default () => {
  const [a, setA] = React.useState<number>(0);
  const [b, setB] = React.useState<number>(0);

  return (
    <ScrollView>
      <SafeAreaView className="relative w-screen h-screen bg-primary p-5">
        <Image
          source={require("@/assets/images/tree.png")}
          className="absolute z-50 right-0"
        />
        <View className="flex-row">
          <Text className="text-white-primary tracking-[3px]">VIT</Text>
          <Image
            source={require("@/assets/images/LogoVitality.png")}
            className="w-[1.5rem] h-[1.5rem]"
          />
          <Text className="text-white-primary tracking-[3px]">LITY</Text>
        </View>
        <View className="grid items-center gap-8 mt-[7rem]">
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
        <View className="flex-1 items-center justify-center">
          <View className="flex-row items-center gap-4">
            <TextInput 
              className="border-2 w-16 text-[20px] border-purple-800 bg-pur text-white-primary rounded-2xl text-center"
              onChangeText={(text) => setA(+text)}
            />
            <Text><X color="#FFFF" /></Text>
            <TextInput 
              className="border-2 w-16 text-[20px] border-purple-800 text-white-primary rounded-2xl text-center"
              onChangeText={(text) => setB(+text)}
            />
            <Text><Equal color="#FFFF" /></Text>
            <Multiply a={a} b={b} />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export const Multiply = React.memo((props: { a: number; b: number }) => {
  const { a, b } = props;
  return <Text className="text-[36px] font-medium text-purple-800">{a * b}</Text>;
});
