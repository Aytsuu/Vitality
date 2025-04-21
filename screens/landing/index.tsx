import "@/global.css";
import { router } from "expo-router";
import { TouchableWithoutFeedback, Alert } from "react-native";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from "react-native-reanimated";
import React, { useEffect } from "react";
import * as Location from 'expo-location';

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

  // Handle location permission and fetch
  useEffect(() => {
    const prepareLocation = async () => {
      try {
        // Request foreground location permission
        const { status } = await Location.requestForegroundPermissionsAsync();
        
        if (status !== 'granted') {
          console.log('Location permission denied');
          return;
        }

        // Get current position (optional - you might want to do this later)
        const location = await Location.getCurrentPositionAsync({});
        console.log('Location obtained:', location);
        
        // You could store this location in global state or context
      } catch (error) {
        console.error('Location error:', error);
        Alert.alert(
          'Location Error',
          'We encountered an issue getting your location. Some features may be limited.'
        );
      }
    };

    // Start animations and location process
    animation1.value = withTiming(1, { duration: 1000 });
    animation2.value = withTiming(1, { duration: 2000 });
    pulseAnim.value = withRepeat(withTiming(.5, { duration: 1500 }), -1, true);
    
    prepareLocation();
  }, []);

  const handleGetStarted = async () => {
    // Optional: Check if we have location permissions before proceeding
    const { status } = await Location.getForegroundPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert(
        'Location Access',
        'Vitality works best with location access to provide personalized content. You can enable this later in settings.',
        [
          { text: 'Continue Anyway', onPress: () => router.push("/(signin)") },
          { text: 'Enable Location', onPress: async () => {
            await Location.requestForegroundPermissionsAsync();
            router.push("/(signin)");
          }}
        ]
      );
    } else {
      router.push("/(signin)");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-primary p-4 md:p-8">
      {/* Animated Content Area */}
      <Animated.View 
        className="flex-1 items-center justify-center gap-6 md:gap-8 lg:gap-10 px-4"
        style={[fadeStyle1]}
      >
        <Image
          source={require("@/assets/images/LogoVitality.png")}
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
        />
        <Text className="text-white-primary text-3xl md:text-4xl lg:text-5xl text-center font-bold">
          Welcome to Vitality
        </Text>
        <Text className="text-white-secondary text-center text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl">
          The harmony of soothing sounds, stories and captivating visuals will
          guide you to a place of calm, clarity, and connection.
        </Text>
      </Animated.View>

      {/* Animated Footer */}
      <Animated.View  
        className="items-center justify-end pb-8 md:pb-12 lg:pb-16 gap-4 md:gap-6"
        style={[fadeStyle2]}
      >
        <Animated.View style={[pulseAnimStyle]}>
          <Text className="text-white-primary text-base md:text-lg lg:text-xl">
            Tap into serenity.
          </Text>
        </Animated.View>
        
        <TouchableWithoutFeedback onPress={handleGetStarted}>
          <View className="bg-purple-light w-full max-w-xs md:max-w-sm h-16 md:h-20 rounded-full justify-center">
            <Text className="text-white-primary text-center text-lg md:text-xl lg:text-2xl font-semibold">
              Get Started
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    </SafeAreaView>
  );
};