import "@/global.css";
import { router } from "expo-router";
import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default React.memo(() => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleLogin = () => {
    if (password === "123" && username === "admin") {
      router.push("/intro");
    } else {
      alert("Incorrect username or password!");
    }
  };

  const handleSignup = () => {
    router.push("/(signup)");
  };  

  return (
    <SafeAreaView className="flex-1 bg-primary p-4 md:p-8">
      {/* Header */}
      <Text className="text-white-primary text-md md:text-2xl">VITALITY</Text>
      
      {/* Logo and Title */}
      <View className="items-center mt-12 md:mt-24 lg:mt-32">
        <View className="items-center gap-4 md:gap-6">
          <Image
            source={require("@/assets/images/LogoVitality.png")}
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          />
          <Text className="text-white-primary text-3xl md:text-4xl lg:text-5xl font-bold">
            SIGN IN
          </Text>
        </View>
      </View>

      {/* Form */}
      <View className="flex-1 mt-8 md:mt-16 lg:mt-20 px-2 md:px-8 lg:px-16">
        {/* Username Input */}
        <View className="mb-4 md:mb-6">
          <Text className="text-white-primary text-base md:text-lg lg:text-xl mb-2">
            Username
          </Text>
          <TextInput
            className="bg-white-primary rounded-full px-6 py-4 md:py-5 text-base md:text-lg"
            placeholder="Enter your username"
            placeholderTextColor="#888"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        {/* Password Input */}
        <View className="mb-4 md:mb-6">
          <Text className="text-white-primary text-base md:text-lg lg:text-xl mb-2">
            Password
          </Text>
          <TextInput
            secureTextEntry={true}
            className="bg-white-primary rounded-full px-6 py-4 md:py-5 text-base md:text-lg"
            placeholder="Enter your password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        {/* Forgot Password */}
        <Text className="text-center text-white-primary text-sm md:text-base lg:text-lg mt-2 md:mt-4">
          Forgot Password?
        </Text>

        {/* Login Button */}
        <TouchableWithoutFeedback onPress={handleLogin}>
          <View className="bg-purple-light rounded-full mt-6 md:mt-10 py-4 md:py-5">
            <Text className="text-white-primary text-center text-lg md:text-xl lg:text-2xl font-semibold">
              Login
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={handleSignup}>
            <Text className="text-white-primary text-center text-sm md:text-xl 
                      lg:text-2xl font-semibold underline mt-8">
              Sign Up
            </Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
});