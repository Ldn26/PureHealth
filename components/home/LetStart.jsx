import { View, Text, Image} from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton';
import {Images } from '../../constants/Images'
import { router } from 'expo-router';
const LetStart = () => {

  return (
    <View className=" px-4 flex-1    items-center justify-center space-y-2   h-screen">
      <Image
        source={Images.home.logo}
        className="max-w-[300px]  h-[300px]"
        resizeMode="contain"
      />
      <View className="flex  gap-4 ">
        <Text className="font-mainfont  text-center text-3xl font-bold">
          Let's Get Started
        </Text>
        <Text className=" text-center  font-interrg text-xl  text-darkgraycolor ">
          Log in to enjoy the features we've privided and be well !{" "}
        </Text>
      </View>
      <View className="">
        <CustomButton
          handelPress={() => router.push("./Login")}
          titlestyle={"text-white py-2 text-xl font-semibold  font-intersb "}
          title={"Log In"}
          mainstyle={
            "bg-primary   mb-4 mt-8  flex flex-row  w-[320px]  items-center rounded-full justify-center"
          }
        />
        <CustomButton
          handelPress={() => router.push("./SignUp")}
          titlestyle={
            "text-primary py-2 text-xl font-semibold  font-intersb "
          }
          title={"Register"}
          mainstyle={
            "border-primary border    flex flex-row  w-[320px]  items-center rounded-full justify-center"
          }
        />
      </View>
    </View>
  );
}

export default LetStart