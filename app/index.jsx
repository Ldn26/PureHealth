import { View, Text,Image,ScrollView, Button, TouchableOpacity ,FlatList, Pressable} from 'react-native'
import React, { useState ,useRef} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Images } from '../constants/Images'
import {Icons} from '../constants/Icons'
import { AntDesign } from "@expo/vector-icons";
import LetStart from '../components/home/LetStart'
export default function StartScreen() {
 const [currentIndex,SetCurrentIndex] = useState(0)
 const sliderflatlistref = useRef(null)
 const sliders = [
   {
     text: "Consulte with our best Doctors",
     ImageUrl: Images.home.doctor,
   },
   {
     text: "Consulte with our Doctors Now ",
     ImageUrl: Images.home.doctor1,
   },
   {
     text: "",
     ImageUrl: Images.home.doctor2,
   },
 ];
const handelpressing = ()=>{
  if(currentIndex < sliders.length -1 ){
    SetCurrentIndex((prv)=>prv+1)
    sliderflatlistref.current.scrollToIndex({index : currentIndex+1})
  }
  else{
    return null
  }
}
const handelSkiping = () => {
    SetCurrentIndex(sliders.length-1);
    sliderflatlistref.current.scrollToIndex({ index: sliders.length-1 })
  }
  


  return (
    <SafeAreaView className="bg-white w-full  min-h-[85vh]  ">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          width: "100%",
        }}
      >
        {currentIndex < sliders.length - 1 ? (
          <View className="w-full h-full relative justify-center   flex-1 px-4">
            <TouchableOpacity
              className="absolute top-0 right-0 p-4 z-10 "
              onPress={handelSkiping}
            >
              <Text className="text-md text-darkgraycolor px-2 ">Skip</Text>
            </TouchableOpacity>
            <FlatList
              ref={sliderflatlistref}
              horizontal={true}
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              className={""}
              data={sliders}
              renderItem={({ item, index }) => {
                return (
                  <View className={"flex flex-col"}>
                    <Image
                      source={item.ImageUrl}
                      className="w-[350px] h-[500px]"
                      resizeMode="contain"
                    />
                    <View className="">
                      <Text className="font-intersb text-3xl text-start text-blackcolor ">
                        {item.text.split(" ")[0]}
                      </Text>
                      <Text className="font-intersb w-[350px] text-3xl text-blackcolor ">
                        {item.text.split(" ").slice(1).join(" ")}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
            <View className="flex flex-row items-center mb-16  justify-between">
              <View>
                <FlatList
                  horizontal={true}
                  data={sliders}
                  renderItem={({ index }) => {
                    return (
                      <View className="flex items-center   flex-row  ">
                        <View
                          className={`w-[20px] h-[6px] rounded-full ml-2 ${
                            index == currentIndex
                              ? " bg-primary"
                              : "bg-darkgraycolor"
                          }`}
                        ></View>
                      </View>
                    );
                  }}
                />
              </View>
              <TouchableOpacity
                className="p-3  rounded-full  bg-primary"
                onPress={handelpressing}
              >
                <AntDesign
                  name="arrowright"
                  size={24}
                  color="white"
                  className="w-[20px] h-[20px]"
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <LetStart />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}