import { View, Text, Image} from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton';

const LetStart = () => {



    const handelLogin = ()=>{

    }
        const handelRegister = () => {};
  return (
    <View className="flex flex-col px-4 flex-1   items-center justify-center space-y-2   h-screen">
      <Image />
      <View className="flex  gap-4 ">
        <Text className="font-mainfont  text-center text-3xl font-bold">
          Let's Get Started
        </Text>
        <Text className=" text-center  font-mainfont text-xl font-semibold text-gray-400 ">
          Log in to enjoy the features we've privided and be well !{" "}
        </Text>
      </View>
      <View className=''>

      <CustomButton
        handelPress={handelLogin}
        titlestyle={"text-white py-2 text-xl font-semibold  font-mainfont "}
        title={"Log In"}
        mainstyle={
          "bg-blue-400   mb-4 mt-8  flex flex-row  w-[320px]  items-center rounded-full justify-center"
        }
      />
      <CustomButton
        handelPress={handelRegister}
        titlestyle={"text-blue-400 py-2 text-xl font-semibold  font-mainfont "}
        title={"Register"}
        mainstyle={
          "border-blue-400 border    flex flex-row  w-[320px]  items-center rounded-full justify-center"
        }
      />
      </View>
    </View>
  );
}

export default LetStart