import { View,Image, Text, ScrollView } from 'react-native'
import React from 'react'
import { OtpInput } from 'react-native-otp-entry'
import CustomButton from '../CustomButton'
import {Images} from '../../constants/Images'
const OTPpage = ({setcounter}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="w-full px-4 min-[85vh]  items-center  justify-center">
        <Image
          source={Images.home.otp}
          className="w-[450px] h-[350px]"
          resizeMode="contain"
        />
        <Text className="text-xl font-intersb font-bold">
          Enter your code Verification{" "}
        </Text>
        <Text className="text-darkgraycolor text-sm my-3 font-interrg">
          Check your Email and Send the OTP code
        </Text>
        <OtpInput
          numberOfDigits={6}
          focusColor="blue"
          focusStickBlinkingDuration={500}
          onTextChange={(text) => console.log(text)}
          onFilled={(text) => console.log(`OTP is ${text}`)}
          textInputProps={{
            accessibilityLabel: "One-Time Password",
          }}

            theme={{
              containerStyle: 'bg-blue-400',
              pinCodeContainerStyle: 'w-20 h-40  ',
              pinCodeTextStyle: ' text-primary  border',
              focusStickStyle: 'border',
              focusedPinCodeContainerStyle: '',
            }}
        />
        <View className="w-full ">
          <CustomButton
            title={"Verify "} 
            handelPress={()=>{setcounter(prv=>prv+1)}}
            titlestyle={"text-white font-intersb text-lg"}
            mainstyle={"bg-primary   mt-8 rounded-full  flex items-center py-2"}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default OTPpage