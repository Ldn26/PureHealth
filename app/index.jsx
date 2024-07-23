import { View, Text,Image,ScrollView, Button, TouchableOpacity ,FlatList, Pressable} from 'react-native'
import React, { useState ,useRef} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Images } from '../constants/Images'
import {Icons} from '../constants/Icons'
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
    <SafeAreaView className="bg-white w-full    h-full">
      <ScrollView contentContainerStyle={{ height: "100%", width: "100%",borderColor:'black' }}>
        {currentIndex < sliders.length - 1 ? (
          <View className="w-full h-full relative justify-center   flex-1 px-4">
            <TouchableOpacity
              className="absolute top-0 right-0 p-4 z-10 "
              onPress={handelSkiping}
            >
              <Text className="text-md  text-gray-300 px-2 ">Skip</Text>
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
                      <Text className="font-mainfont text-3xl text-start font-bold ">
                        {item.text.split(" ")[0]}
                      </Text>
                      <Text className="font-mainfont w-[350px] text-3xl font-bold ">
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
                              ? "bg-blue-300"
                              : "bg-gray-300"
                          }`}
                        ></View>
                      </View>
                    );
                  }}
                />
              </View>
              <TouchableOpacity
                className="p-3  rounded-full  bg-blue-400"
                onPress={handelpressing}
              >
                <Image
                  source={Icons.rightArrow}
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