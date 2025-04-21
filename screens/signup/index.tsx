import React, { useRef } from "react";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { signupSchema } from "@/schema/signup-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Image, ScrollView, Text, TouchableOpacity, View, Alert } from "react-native";
import { router } from "expo-router";

export default () => {
  // Create refs for each input
  const firstNameRef = useRef<TextInput>(null);
  const middleNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const genderRef = useRef<TextInput>(null);
  const usernameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const {
    control,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      gender: "",
      username: "",
      password: ""
    }
  });

  const onSubmit = async () => {
    const formIsValid = await trigger([
      "firstName", 
      "middleName", 
      "lastName", 
      "email",
      "gender",
      "username",
      "password"
    ]);

    if(!formIsValid) {
      return Alert.alert("Validation Error", "Please fill in all fields correctly.");
    }

    Alert.alert("Success", "Account created successfully!");
    router.push("/(signin)");
  };

  return (
    <ScrollView>
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
              SIGN UP
            </Text>
          </View>
        </View>
        

        {/* Form */}
        <View className="flex-1 mt-8 md:mt-16 lg:mt-20 px-2 md:px-8 lg:px-16">
          {/* First Name Input */}
          <View className="mb-4 md:mb-6">
            <Text className="text-white-primary text-base md:text-lg lg:text-xl mb-2">
              First Name
            </Text>
            <Controller
              control={control}
              name="firstName"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  ref={firstNameRef}
                  className="bg-white-primary rounded-full px-6 py-4 md:py-5 text-base md:text-lg"
                  placeholder="Enter your first name"
                  placeholderTextColor="#888"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  returnKeyType="next"
                  onSubmitEditing={() => middleNameRef.current?.focus()}
                />
              )}
            />
            {errors.firstName && (
              <Text className="text-red-500 text-sm">
                {errors.firstName.message}
              </Text>
            )}
          </View>

          {/* Middle Name Input */}
          <View className="mb-4 md:mb-6">
            <Text className="text-white-primary text-base md:text-lg lg:text-xl mb-2">
              Middle Name
            </Text>
            <Controller
              control={control}
              name="middleName"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  ref={middleNameRef}
                  className="bg-white-primary rounded-full px-6 py-4 md:py-5 text-base md:text-lg"
                  placeholder="Enter your middle name"
                  placeholderTextColor="#888"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  returnKeyType="next"
                  onSubmitEditing={() => lastNameRef.current?.focus()}
                />
              )}
            />
            {errors.middleName && (
              <Text className="text-red-500 text-sm">
                {errors.middleName.message}
              </Text>
            )}
          </View>

          {/* Last Name Input */}
          <View className="mb-4 md:mb-6">
            <Text className="text-white-primary text-base md:text-lg lg:text-xl mb-2">
              Last Name
            </Text>
            <Controller
              control={control}
              name="lastName"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  ref={lastNameRef}
                  className="bg-white-primary rounded-full px-6 py-4 md:py-5 text-base md:text-lg"
                  placeholder="Enter your last name"
                  placeholderTextColor="#888"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  returnKeyType="next"
                  onSubmitEditing={() => emailRef.current?.focus()}
                />
              )}
            />
            {errors.lastName && (
              <Text className="text-red-500 text-sm">
                {errors.lastName.message}
              </Text>
            )}
          </View>

          {/* Email Input */}
          <View className="mb-4 md:mb-6">
            <Text className="text-white-primary text-base md:text-lg lg:text-xl mb-2">
              Email
            </Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  ref={emailRef}
                  className="bg-white-primary rounded-full px-6 py-4 md:py-5 text-base md:text-lg"
                  placeholder="Enter your email"
                  placeholderTextColor="#888"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  returnKeyType="next"
                  onSubmitEditing={() => genderRef.current?.focus()}
                />
              )}
            />
            {errors.email && (
              <Text className="text-red-500 text-sm">{errors.email.message}</Text>
            )}
          </View>

          {/* Gender Input */}
          <View className="mb-4 md:mb-6">
            <Text className="text-white-primary text-base md:text-lg lg:text-xl mb-2">
              Gender
            </Text>
            <Controller
              control={control}
              name="gender"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  ref={genderRef}
                  className="bg-white-primary rounded-full px-6 py-4 md:py-5 text-base md:text-lg"
                  placeholder="Enter your gender"
                  placeholderTextColor="#888"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  returnKeyType="next"
                  onSubmitEditing={() => usernameRef.current?.focus()}
                />
              )}
            />
            {errors.gender && (
              <Text className="text-red-500 text-sm">{errors.gender.message}</Text>
            )}
          </View>

          {/* Username Input */}
          <View className="mb-4 md:mb-6">
            <Text className="text-white-primary text-base md:text-lg lg:text-xl mb-2">
              Username
            </Text>
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  ref={usernameRef}
                  className="bg-white-primary rounded-full px-6 py-4 md:py-5 text-base md:text-lg"
                  placeholder="Enter your username"
                  placeholderTextColor="#888"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="none"
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current?.focus()}
                />
              )}
            />
            {errors.username && (
              <Text className="text-red-500 text-sm">
                {errors.username.message}
              </Text>
            )}
          </View>

          {/* Password Input */}
          <View className="mb-4 md:mb-6">
            <Text className="text-white-primary text-base md:text-lg lg:text-xl mb-2">
              Password
            </Text>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  ref={passwordRef}
                  className="bg-white-primary rounded-full px-6 py-4 md:py-5 text-base md:text-lg"
                  placeholder="Enter your password"
                  placeholderTextColor="#888"
                  secureTextEntry={true}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  returnKeyType="go"
                  onSubmitEditing={onSubmit}
                />
              )}
            />
            {errors.password && (
              <Text className="text-red-500 text-sm">
                {errors.password.message}
              </Text>
            )}
          </View>

          <TouchableOpacity onPress={onSubmit} activeOpacity={0.7}>
            <View className="bg-purple-light rounded-full mt-8 md:mt-10 py-4 md:py-5">
              <Text className="text-white-primary text-center text-lg md:text-xl lg:text-2xl font-semibold">
                Sign Up
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};