import { View, Text, Image, ScrollView,TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm } from "react-hook-form";
import { Octicons } from "@expo/vector-icons";
import FormField from "../../components/FormField";
import { Feather } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";

import { useRouter } from "expo-router";
export default function SignUp() {
     const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Registration ",
      headerStyle: {
        backgroundColor: "#fff", // change to your desired color
        elevation: 1, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
        borderBottomWidth: 0,
      },
      headerTintColor: "#000",
    });
  }, [navigation]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      dateofBirth : "", 
      lastName : "",
      idNumber : "",
      repeatpassword: "",
      Password: "",
      mobileNumber : "",
    }
  });
  const onSubmit = (data) => console.log(data);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="bg-white h-full">
        <ScrollView>
          {/* <View className="w-full px-4 min-[85vh] my-6 justify-center">
            {/* <FormField
              controle={control}
              placeholder={"Youcef Laidani"}
              name={"firstName"}
              iconComponent={Octicons}
              iconname={"person"}
              iconsize={24}
              iconcolor={"#60a5fa"}
            /> */}
          {/* <FormField
              controle={control}
              placeholder={"Youcef Laidani"}
              name={"Password"}
              iconComponent={Octicons}
              iconname={"person"}
              iconsize={24}
              otherstyles={"my-4"}
              iconcolor={"#60a5fa"}
            /> */}
          {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
          {/* </View> */}
          <View className="w-full  px-4 min-h-[55vh] my-6 justify-center">
            <FormField
              controle={control}
              placeholder={"Enter your first name "}
              name={"firstName"}
              iconComponent={Octicons}
              otherstyles={"mb-2"}
              iconname={"person"}
              iconsize={24}
              iconcolor={"#60a5fa"}
              errors={errors}
              rules={{ required: "first name  is required" }}
            />
            <FormField
              controle={control}
              placeholder={"Enter you last name"}
              name={"lastName"}
              iconComponent={Octicons}
              iconname={"person"}
              otherstyles={"mb-2"}
              iconsize={24}
              iconcolor={"#60a5fa"}
              errors={errors}
              rules={{ required: "last name  is required" }}
            />

            <FormField
              controle={control}
              placeholder={"Enter your E-mail "}
              name={"gmail"}
              errors={errors}
              rules={{ required: "Email  is required" }}
              iconname={"mail"}
              iconsize={24}
              otherstyles={"mb-2"}
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
              otherstyles={"mb-2"}
              errors={errors}
              iconComponent={Feather}
              iconname={"lock"}
              iconsize={24}
              iconcolor={"#60a5fa"}
            />
            <FormField
              controle={control}
              // rules={{
                // required: "Passowrd is required",
                // minLength: {
                //   value: 3,
                //   message: "Password must be at least 8 characters",
                // },
                // pattern: {
                //   value:
                //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                //   message:
                //     "Password must include uppercase, lowercase, number, and special character",
                // },
              // }}
              placeholder={"Repeat your password"}
              name={"repeatpassword"}
              otherstyles={"mb-2"}
              errors={errors}
              iconComponent={Feather}
              iconname={"lock"}
              iconsize={24}
              iconcolor={"#60a5fa"}
            />
          
            <CustomButton
              title={"Sign Up "}
              titlestyle={"text-white font-intersb text-lg"}
              mainstyle={
                "mt-4 bg-primary py-3 px-4 rounded-full flex items-center "
              }
              handelPress={handleSubmit(onSubmit)}
            />
            <View className="flex flex-row mx-auto p-4 items-center">
              <Text className="text-center  text-darkgraycolor">
             Already have  have an Account ?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  router.push("./Login");
                }}
                className=""
              >
                <Text className="text-primary font-intersb   text-center">
                  Log in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
