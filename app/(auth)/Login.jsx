import { View, Text, Image,Button, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from '../../components/FormField'
import { useForm } from "react-hook-form";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import {  useNavigation, } from "expo-router";
import  CustomButton from '../../components/CustomButton'
import { useRouter } from "expo-router";
export default function Login() {
  const router = useRouter()
   const navigation = useNavigation()

  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Authentication ",
      headerStyle: {
        backgroundColor: "#fff", // change to your desired color
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
        borderBottomWidth: 0,
      },
      headerTintColor: "#000",
    });
  },[navigation])
   const {
     control,
     handleSubmit,
     formState: { errors },
   } = useForm({
     defaultValues: {
       gmail: "",
       Password: "",
     },
   });
   const onSubmit = (data) => console.log(data);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="bg-white h-full">
        <ScrollView>
          <View className="w-full  px-4 min-h-[55vh] my-6 justify-center">
            <FormField
              controle={control}
              placeholder={"Enter your E-mail "}
              name={"gmail"}
              errors={errors}
              rules={{ required: "Email  is required" }}
              iconname={"mail"}
              iconsize={24}
              otherstyles={"my-4"}
              iconcolor={"#60a5fa"}
              iconComponent={Feather}
            />
            <FormField
              controle={control}
              rules={{
                required: "Passowrd is required",
                minLength: {
                  value: 3,
                  message: "Password must be at least 8 characters",
                },
                // pattern: {
                //   value:
                //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                //   message:
                //     "Password must include uppercase, lowercase, number, and special character",
                // },
              }}
              placeholder={"Enter your password"}
              name={"Password"}
              errors={errors}
              iconComponent={Feather}
              iconname={"lock"}
              iconsize={24}
              iconcolor={"#60a5fa"}
            />
            <View className=" flex justify-between flex-row ">
              <Text></Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.push("./");
                }}
              >
                <Text className="text-primary   font-intersb text-sm p-2  ">
                  Forget password ?
                </Text>
              </TouchableOpacity>
            </View>
            <CustomButton
              title={"Log in "}
              titlestyle={"text-white font-intersb text-lg"}
              mainstyle={
                "mt-4 bg-primary py-3 px-4 rounded-full flex items-center "
              }
            />
            <View className="flex flex-row mx-auto p-4 items-center">
              <Text className="text-center  text-darkgraycolor">
                Don't have an Account ?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  router.push("./SignUp");
                }}
                className=""
              >
                <Text className="text-primary font-intersb   text-center">
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
