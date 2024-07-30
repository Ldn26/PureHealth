import { View, Text, Image,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Controller } from "react-hook-form";
import { Icons } from "../constants/Icons";

export default function FormField({
  IconUrl,
  placeholder,
  keyboardType,
  title,
  name,
  errors,
  rules,
  controle,
  iconComponent: IconComponent ,
  otherstyles,
  iconname,
  iconsize,
  iconcolor,
  ...props
}) {
  const [showpassword, setShowpassword] = useState(false);
  return (
    <View className={`space-y ${otherstyles} `}>
      {title && (
        <Text className={`font-intersb  ml-2 my-1`}>{title} :</Text>
      )}
      <View
        className={`w-full b h-16 px-4  bg-lightgraycolor   rounded-2xl focus:border-primary flex-row items-center`}
      >
        <Controller
          rules={{ ...rules }}
          control={controle}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              {IconComponent && (
                <IconComponent
                  name={iconname}
                  size={iconsize}
                  color={iconcolor}
                />
              )}

              <TextInput 
              keyboardType={keyboardType || undefined}
                className={"flex-1 ml-2   font-intermd font-medium text-md"}
                placeholder={placeholder}
                onBlur={onBlur}
                placeholderTextColor={"#03346E"}
                onChangeText={onChange}
                secureTextEntry={name === "Password" && !showpassword}
                value={value}
              />
            </>
          )}
        />

        {(name === "Password"   ||
          name === "repeatpassword") && (
            <TouchableOpacity onPress={() => setShowpassword(!showpassword)}>
              <Image
                source={showpassword ? Icons.eye : Icons.eyeHide}
                className={"w-6 h-6"}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
      </View>
      {errors[name] && (
        <Text className="text-red-500 my-1 p-2">{errors[name].message}</Text>
      )}
    </View>
  );
}
