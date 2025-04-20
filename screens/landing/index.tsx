import "@/global.css";
import { router } from "expo-router";
import { TouchableWithoutFeedback } from "react-native";

import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from "react-native-reanimated";
import React from "react";

export default () => {
  const animation1 = useSharedValue(0);
  const animation2 = useSharedValue(0);
  const pulseAnim = useSharedValue(0);

  const fadeStyle1 = useAnimatedStyle(() => {
    return {
      opacity: animation1.value,
    };
  }, [animation1]);

  const fadeStyle2 = useAnimatedStyle(() => {
    return {
      opacity: animation2.value,
    };
  }, [animation2]);
  
  const pulseAnimStyle = useAnimatedStyle(() => {
    return {
      opacity: pulseAnim.value,
    }
  }, [pulseAnim]);

  React.useEffect(() => {
    animation1.value = withTiming(1, { duration: 1000 });
    animation2.value = withTiming(1, { duration: 2000 });
    pulseAnim.value = withRepeat(withTiming(.5, { duration: 1500 }), -1, true);
  },[]);

  return (
    <SafeAreaView className="w-screen h-screen bg-primary p-5">
      <Animated.View 
        className="flex-grow items-center gap-8 pt-24"
        style={[fadeStyle1]}
      >
        <Image
          source={require("@/assets/images/LogoVitality.png")}
          className="w-30 h-30"
        />
        <Text className="text-white-primary text-[30px]">
          Welcome to Vitality
        </Text>
        <Text className="text-white-secondary text-center text-[18px] leading-relaxed">
          The harmony of soothing sounds, stories and captivating visuals will
          guide you to a place of calm, clarity, and connection.
        </Text>
      </Animated.View>
      <Animated.View  
        className="flex items-center justify-end gap-4 mb-16"
        style={[fadeStyle2]}
      >
        <Animated.View 
            style={[pulseAnimStyle]}
          >
            <Text className="text-white-primary">Tap into serenity.</Text>
          </Animated.View>
        <TouchableWithoutFeedback onPress={() => router.push("/(signin)")}>
          <View 
            className="flex justify-center bg-purple-light w-[320px] h-[63px] rounded-full"
          >
            <Text className="text-white-primary text-center text-[18px]">
              Get Started
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View >
    </SafeAreaView>
  );
};
