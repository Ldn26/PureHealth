import { View, Text, Image, ScrollView,TouchableOpacity, Modal,TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm } from "react-hook-form";
import { Octicons } from "@expo/vector-icons";
import FormField from "../../components/FormField";
import { Feather } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CustomButton from "../../components/CustomButton";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Link, useNavigation } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import DatePicker from "react-native-modern-datepicker";

import { useRouter } from "expo-router";
import OTPpage from "../../components/home/OTPpage";
import { Images } from "../../constants/Images";
export default function SignUp() {

      const navigation = useNavigation();
      const router = useRouter();
    useEffect(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: "Registration ",
        headerStyle: {
          backgroundColor: "#fff", // change to your desired color
          elevation: 0, // remove shadow on Android
          shadowOpacity: 1, // remove shadow on iOS
        },
        headerTintColor: "#000",
      });
    }, [navigation]);
      const {
        control,
        setValue,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        defaultValues: {
          firstName: "",
          gmail: "",
          dateofBirth: "",
          lastName: "",
          idNumber: "",
          repeatpassword: "",
          Password: "",
          datebirth: "",
          mobileNumber: "",
        },
      });
        const pwd = watch("Password");

     const EmailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 
    const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);


 const onDateChange = (date) => {
  setModalVisible(false);
   const formattedDate = date.replace(/\//g, "-");
  setSelectedDate(formattedDate);
setValue("datebirth", formattedDate); // Update the form field
  };
  const [counter,setcounter] = useState(1)
   const onNext = () => {
     setcounter((prv) => prv + 1);
   };
      const handelBack = () => {
        setcounter((prv) => prv - 1);
      };
  const onSubmit1 = () =>{
    setcounter((prv)=>prv+1)
  }
  const handelOnfinish =()=>{

  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="bg-white h-full">
        {/* Step 1  */}
        {counter === 1 && (
          <ScrollView>
            <View className="w-full px-4 min-[85vh] my-6 justify-center">
              <FormField
                name={"gmail"}
                controle={control}
                placeholder={"Enter your E-mail "}
                errors={errors}
                rules={{
                  required: "Email is required",
                  pattern: { value: EmailRegx, message: "Invalide E-mail " },
                }}
                iconname={"mail"}
                iconsize={24}
                otherstyles={"my-4"}
                iconcolor={"#60a5fa"}
                iconComponent={Feather}
              />
              <FormField
                name={"Password"}
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
                errors={errors}
                iconComponent={Feather}
                iconname={"lock"}
                iconsize={24}
                iconcolor={"#60a5fa"}
              />
              <FormField
                name={"repeatpassword"}
                controle={control}
                rules={{
                  validate: (value) => value == pwd || "Password do not match ",
                }}
                placeholder={"Repeat password"}
                iconComponent={Feather}
                iconname={"lock"}
                iconsize={24}
                errors={errors}
                otherstyles={"my-4"}
                iconcolor={"#60a5fa"}
              />
            </View>

            <View className=" px-4 -mt-4">
              <CustomButton
                title={"Next"}
                titlestyle={"text-white font-intersb text-lg"}
                mainstyle={
                  "mt-4 bg-primary py-3 px-4  rounded-full flex items-center "
                }
                handelPress={handleSubmit(onNext)}
              />
            </View>
            <View className="flex flex-row mx-auto p-4 items-center">
              <Text className="text-center  text-darkgraycolor">
                Already have have an Account ?{" "}
              </Text>

              <Link
                href={"./Login"}
                className="text-primary font-intersb   text-center"
              >
                Log in
              </Link>
            </View>
          </ScrollView>
        )}
        {counter === 2 && <OTPpage setcounter={setcounter} />}
        {counter === 3 && (
          <ScrollView>
            <View className={`w-full  px-4 min-[85vh] my-6 justify-center `}>
              <FormField
                controle={control}
                placeholder={"First name "}
                name={"firstName"}
                iconComponent={Octicons}
                otherstyles={`mb-2 ${
                  modalVisible ? "opacity-10" : "opacity-100"
                }`}
                iconname={"person"}
                iconsize={24}
                iconcolor={"#60a5fa"}
                errors={errors}
                rules={{ required: "first name  is required" }}
              />
              <FormField
                controle={control}
                placeholder={"Last name"}
                name={"lastName"}
                iconComponent={Octicons}
                iconname={"person"}
                otherstyles={`mb-2 ${
                  modalVisible ? "opacity-40" : "opacity-100"
                }`}
                iconsize={24}
                iconcolor={"#60a5fa"}
                errors={errors}
                rules={{ required: "last name  is required" }}
              />
              <TouchableOpacity
                style={{ opacity: modalVisible ? 0.4 : 1 }}
                onPress={() => setModalVisible(true)}
                className=""
              >
                <FormField
                  controle={control}
                  placeholder={"Date of birth "}
                  name={"datebirth"}
                  iconComponent={AntDesign}
                  iconname={"calendar"}
                  otherstyles={`mb-2 ${
                    modalVisible ? "opacity-40" : "opacity-100"
                  }`}
                  iconsize={24}
                  iconcolor={"#60a5fa"}
                  errors={errors}
                  rules={{ required: "Date of birth  is required" }}
                />
              </TouchableOpacity>

              <Modal
                transparent={true}
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    className="px-4"
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 20,
                      padding: 10,
                      width: 400,
                      height: 400,
                      justifyContent: "center",
                    }}
                  >
                    <DatePicker
                      options={{
                        backgroundColor: "#F6F7F9",
                        textHeaderColor: "#151515",
                        textDefaultColor: "#151515",
                        selectedTextColor: "#000",
                        mainColor: "#0064F7",
                        textSecondaryColor: "#0064F7",
                        borderColor: "#151515",
                      }}
                      current="2024-07-29"
                      selected="2020-07-23"
                      mode="calendar"
                      minuteInterval={30}
                      style={{
                        borderRadius: 20,
                        width: "100%",
                        height: "100%",
                      }}
                      onDateChange={onDateChange}
                    />
                  </View>
                </View>
              </Modal>
            </View>

            <View className=" flex flex-row  justify-between px-4 -mt-4">
              <CustomButton
                title={"Back"}
                titlestyle={"text-white font-intersb text-lg"}
                mainstyle={
                  "mt-4 bg-blue-800 py-3  px-8  rounded-full flex items-center "
                }
                handelPress={handelBack}
              />
              <CustomButton
                title={"Next"}
                titlestyle={"text-white font-intersb text-lg"}
                mainstyle={
                  "mt-4 bg-blue-400 py-3 px-8  rounded-full flex items-center "
                }
                handelPress={handleSubmit(onSubmit1)}
              />
            </View>
            <View className="flex flex-row mx-auto p-4 items-center">
              <Text className="text-center  text-darkgraycolor">
                Already have have an Account ?{" "}
              </Text>

              <Link
                href={"./Login"}
                class="text-primary  font-intersb   text-center"
              >
                Log in
              </Link>
            </View>
          </ScrollView>
        )}

        {counter === 4 && (
          <ScrollView>
            <View className={`w-full items-center px-4 min-[85vh] my-6 justify-center `}>
              <Image
                source={Images.home.idcard}
                className="w-[450px]  -mt-8 h-[350px]"
                resizeMode="contain"
              />
              <FormField
                controle={control}
                placeholder={"Phone Number  "}
                name={"phonenumber"}
                keyboardType={"numeric"}
                iconComponent={FontAwesome}
                otherstyles={`mb-2`}
                iconname={"phone"}
                iconsize={24}
                iconcolor={"#60a5fa"}
                errors={errors}
                rules={{ required: "phone number  is required" }}
              />
              <FormField
                controle={control}
                placeholder={"ID card number"}
                name={"IDnumber"}
                iconComponent={FontAwesome}
                keyboardType={"numeric"}
                iconname={"vcard"}
                iconsize={24}
                iconcolor={"#60a5fa"}
                errors={errors}
                rules={{ required: "ID card number  is required" }}
              />
            </View>

            <View className="px-4">
              <CustomButton 
                title={"Finish"}
                titlestyle={"text-white font-intersb text-lg"}
                mainstyle={
                  " bg-primary py-3 px-8  rounded-full flex items-center "
                }
                handelPress={handleSubmit(handelOnfinish)}
              />
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
